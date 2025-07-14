"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarRegistro = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const validarRegistro = async (req, res, next) => {
    const { nickname, correo, contrasena, confirmarContrasena, pais } = req.body;
    const errores = [];
    // 1. Validación de campos requeridos
    if (!nickname || !correo || !contrasena || !confirmarContrasena || !pais) {
        errores.push('Todos los campos obligatorios deben estar completos.');
    }
    // 2. Validaciones individuales
    if (correo && !correo.includes('@')) {
        errores.push('El correo debe tener un formato válido.');
    }
    if (contrasena && contrasena.length < 8) {
        errores.push('La contraseña debe tener al menos 8 caracteres.');
    }
    if (contrasena !== confirmarContrasena) {
        errores.push('Las contraseñas no coinciden.');
    }
    // 3. Solo consultar la BD si no hay errores previos
    if (errores.length === 0) {
        const [existeNickname, existeCorreo] = await Promise.all([
            client_1.default.usuario.findUnique({ where: { nickname } }),
            client_1.default.usuario.findUnique({ where: { correo } })
        ]);
        if (existeNickname)
            errores.push('El nickname ya está en uso.');
        if (existeCorreo)
            errores.push('El correo ya está registrado.');
    }
    // 4. Retornar errores si existen
    if (errores.length > 0) {
        console.log('Errores desde backend:', errores);
        res.status(400).json({ errores });
        return;
    }
    // 5. Continuar al siguiente middleware
    next();
};
exports.validarRegistro = validarRegistro;
