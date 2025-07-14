"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarRolAdmin = void 0;
// Este middleware asume que `req.usuario` fue cargado previamente por validarAutenticacion
const validarRolAdmin = (req, res, next) => {
    if (!req.usuario) {
        return res.status(401).json({ error: 'No autenticado' });
    }
    if (req.usuario.tipo !== 'admin') {
        return res.status(403).json({ error: 'Acceso denegado. Se requiere rol de administrador.' });
    }
    next();
};
exports.validarRolAdmin = validarRolAdmin;
