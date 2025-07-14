"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarMultiplesUsuarios = exports.obtenerPerfil = exports.editarPerfil = exports.cambiarContrasenaConToken = exports.enviarTokenContrasena = exports.eliminar = exports.editar = exports.listar = exports.verificarCuenta = exports.registrar = exports.login = void 0;
const UsuarioService = __importStar(require("../services/usuarioService"));
const client_1 = __importDefault(require("../../prisma/client"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const emailService_1 = require("../services/emailService");
const login = async (req, res) => {
    try {
        const { correo, contrasena } = req.body;
        const usuario = await client_1.default.usuario.findFirst({
            where: {
                OR: [
                    { correo: correo },
                    { nickname: correo }
                ]
            }
        });
        if (!usuario) {
            res.status(401).json({ error: 'Usuario no encontrado' });
        }
        else {
            const coincide = await bcrypt_1.default.compare(contrasena, usuario.contrasena);
            if (!coincide) {
                res.status(401).json({ error: 'Contraseña incorrecta' });
            }
            else if (!usuario.verificado) {
                res.status(403).json({ error: 'Debes confirmar tu cuenta desde el correo' });
            }
            else {
                const token = jsonwebtoken_1.default.sign({ id: usuario.id, tipo: usuario.tipo }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: false,
                    sameSite: 'lax',
                    maxAge: 3600000
                });
                const { contrasena: _ } = usuario, usuarioSinContrasena = __rest(usuario, ["contrasena"]);
                res.json({ mensaje: 'Inicio de sesión exitoso', usuario: usuarioSinContrasena });
            }
        }
    }
    catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
exports.login = login;
const registrar = async (req, res) => {
    try {
        const usuario = await UsuarioService.registrarUsuario(req.body);
        res.status(201).json(usuario);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.registrar = registrar;
const verificarCuenta = async (req, res) => {
    const { token } = req.params;
    const usuario = await client_1.default.usuario.findFirst({ where: { token } });
    if (!usuario) {
        res.status(400).json({ error: 'Token inválido' });
    }
    else {
        await client_1.default.usuario.update({
            where: { id: usuario.id },
            data: { verificado: true, token: null },
        });
        res.json({ mensaje: 'Cuenta verificada correctamente.' });
    }
};
exports.verificarCuenta = verificarCuenta;
const listar = async (_req, res) => {
    const usuarios = await UsuarioService.obtenerUsuarios();
    res.json(usuarios);
};
exports.listar = listar;
const editar = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const usuario = await UsuarioService.actualizarUsuario(id, req.body);
        res.json(usuario);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.editar = editar;
const eliminar = async (req, res) => {
    const id = Number(req.params.id);
    try {
        await UsuarioService.eliminarUsuario(id);
        res.status(204).send();
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.eliminar = eliminar;
const enviarTokenContrasena = async (req, res) => {
    const { correo } = req.body;
    if (!correo) {
        res.status(400).json({ error: 'Correo requerido' });
    }
    else {
        const usuario = await client_1.default.usuario.findUnique({ where: { correo } });
        if (!usuario) {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
        else {
            const token = jsonwebtoken_1.default.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '10m' });
            await client_1.default.usuario.update({
                where: { id: usuario.id },
                data: { token }
            });
            await (0, emailService_1.enviarCorreoRecuperacion)(correo, token);
            res.json({ mensaje: 'Token enviado al correo' });
        }
    }
};
exports.enviarTokenContrasena = enviarTokenContrasena;
const cambiarContrasenaConToken = async (req, res) => {
    const { token, nuevaContrasena } = req.body;
    if (!token || !nuevaContrasena) {
        res.status(400).json({ error: 'Faltan datos obligatorios.' });
    }
    else {
        const usuario = await client_1.default.usuario.findFirst({
            where: { token }
        });
        if (!usuario) {
            res.status(400).json({ error: 'Token inválido o expirado.' });
        }
        else {
            const hashContrasena = await bcrypt_1.default.hash(nuevaContrasena, 10);
            await client_1.default.usuario.update({
                where: { id: usuario.id },
                data: {
                    contrasena: hashContrasena,
                    token: null
                }
            });
            res.json({ mensaje: 'Contraseña actualizada correctamente.' });
        }
    }
};
exports.cambiarContrasenaConToken = cambiarContrasenaConToken;
const editarPerfil = async (req, res) => {
    var _a;
    const id = Number(req.params.id);
    const { nickname, correo, pais } = req.body;
    const imagen = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename; // 👈 viene de multer
    try {
        const dataActualizar = { nickname, correo, pais };
        if (imagen)
            dataActualizar.imagen = imagen;
        const actualizado = await client_1.default.usuario.update({
            where: { id },
            data: dataActualizar,
        });
        res.json(actualizado);
    }
    catch (error) {
        console.error('Error al actualizar perfil:', error);
        res.status(500).json({ error: 'Error al actualizar perfil' });
    }
};
exports.editarPerfil = editarPerfil;
const obtenerPerfil = async (req, res) => {
    var _a;
    const id = (_a = req.usuario) === null || _a === void 0 ? void 0 : _a.id;
    if (!id) {
        res.status(401).json({ error: 'No autenticado' });
    }
    else {
        const usuario = await client_1.default.usuario.findUnique({ where: { id } });
        if (!usuario) {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
        else {
            const { contrasena, token } = usuario, usuarioLimpio = __rest(usuario, ["contrasena", "token"]);
            res.json(usuarioLimpio);
        }
    }
};
exports.obtenerPerfil = obtenerPerfil;
const registrarMultiplesUsuarios = async (req, res) => {
    try {
        const usuarios = req.body;
        if (!Array.isArray(usuarios) || usuarios.length === 0) {
            return res.status(400).json({ error: 'Se requiere una lista de usuarios' });
        }
        const nuevosUsuarios = await client_1.default.usuario.createMany({
            data: usuarios,
            skipDuplicates: true
        });
        res.status(201).json({ mensaje: 'Usuarios registrados con éxito', cantidad: nuevosUsuarios.count });
    }
    catch (error) {
        console.error('❌ Error al registrar múltiples usuarios:', error);
        res.status(500).json({ error: 'Error al registrar los usuarios' });
    }
};
exports.registrarMultiplesUsuarios = registrarMultiplesUsuarios;
