"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarAutenticacion = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validarAutenticacion = (req, res, next) => {
    var _a, _b;
    const token = ((_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token) || ((_b = req.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1]);
    if (!token) {
        res.status(401).json({ error: 'Token requerido' });
    }
    else {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            req.usuario = decoded;
            next();
        }
        catch (err) {
            res.status(403).json({ error: 'Token inválido o expirado' });
        }
    }
};
exports.validarAutenticacion = validarAutenticacion;
