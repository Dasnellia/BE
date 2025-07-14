"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cambiarContrasenaConToken = exports.eliminarUsuario = exports.actualizarUsuario = exports.obtenerUsuarios = exports.iniciarSesion = exports.registrarUsuario = void 0;
const client_1 = __importDefault(require("../../prisma/client"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'token';
const emailService_1 = require("./emailService");
const registrarUsuario = async (data) => {
    const { nickname, correo, contrasena, pais } = data;
    const existeCorreo = await client_1.default.usuario.findUnique({ where: { correo } });
    if (existeCorreo)
        throw new Error('El correo ya está registrado.');
    const hash = await bcrypt_1.default.hash(contrasena, 10);
    const token = jsonwebtoken_1.default.sign({ correo }, process.env.JWT_SECRET, { expiresIn: '10m' });
    // ENVÍA CORREO
    await (0, emailService_1.enviarCorreoVerificacion)(correo, token);
    // NO lo guardes aún hasta que confirme (esto es opcional según cómo desees validar)
    await client_1.default.usuario.create({
        data: {
            nickname,
            correo,
            contrasena: hash,
            pais,
            tipo: 'user',
            verificado: false,
            token
        }
    });
    return { mensaje: 'Correo de verificación enviado. Revisa tu bandeja.' };
};
exports.registrarUsuario = registrarUsuario;
const iniciarSesion = async (correoONickname, contrasena) => {
    const esCorreo = correoONickname.includes('@');
    const whereClause = esCorreo ? { correo: correoONickname } : { nickname: correoONickname };
    const usuario = await client_1.default.usuario.findUnique({ where: whereClause });
    if (!usuario) {
        throw new Error('Usuario no encontrado');
    }
    const match = await bcrypt_1.default.compare(contrasena, usuario.contrasena);
    if (!match) {
        throw new Error('Contraseña incorrecta');
    }
    // 👇 Verificación del correo
    if (!usuario.verificado) {
        throw new Error('Tu cuenta aún no ha sido verificada. Revisa tu correo electrónico.');
    }
    const token = jsonwebtoken_1.default.sign({ id: usuario.id, tipo: usuario.tipo }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, usuario };
};
exports.iniciarSesion = iniciarSesion;
const obtenerUsuarios = async () => {
    return client_1.default.usuario.findMany({
        where: {
            tipo: 'user' // Solo usuarios normales
        },
        select: {
            id: true,
            nickname: true,
            correo: true,
            pais: true,
            imagen: true,
            tipo: true
        }
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
const actualizarUsuario = (id, data) => client_1.default.usuario.update({
    where: { id },
    data,
});
exports.actualizarUsuario = actualizarUsuario;
const eliminarUsuario = (id) => client_1.default.usuario.delete({ where: { id } });
exports.eliminarUsuario = eliminarUsuario;
const cambiarContrasenaConToken = async (token, nuevaContrasena) => {
    const usuario = await client_1.default.usuario.findFirst({ where: { token } });
    if (!usuario)
        throw new Error('Token inválido o expirado.');
    const hashContrasena = await bcrypt_1.default.hash(nuevaContrasena, 10);
    await client_1.default.usuario.update({
        where: { id: usuario.id },
        data: {
            contrasena: hashContrasena,
            token: null
        }
    });
    return 'Contraseña actualizada correctamente.';
};
exports.cambiarContrasenaConToken = cambiarContrasenaConToken;
