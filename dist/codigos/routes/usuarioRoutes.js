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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController = __importStar(require("../controllers/usuarioController"));
const validarRegistro_1 = require("../../middleware/validarRegistro");
const usuarioController_1 = require("../controllers/usuarioController");
const uploadImagen_1 = require("../../middleware/uploadImagen");
const usuarioController_2 = require("../controllers/usuarioController");
const validarAutenticacion_1 = require("../../middleware/validarAutenticacion");
const router = (0, express_1.Router)();
router.post('/registro', validarRegistro_1.validarRegistro, usuarioController.registrar);
router.post('/login', usuarioController.login);
router.get('/', usuarioController.listar);
router.put('/:id', usuarioController.editar);
router.delete('/:id', usuarioController.eliminar);
router.get('/verificar/:token', usuarioController.verificarCuenta);
router.post('/enviar-token-contrasena', usuarioController_1.enviarTokenContrasena);
router.post('/cambiar-contrasena', usuarioController_1.cambiarContrasenaConToken);
router.patch('/editar/:id', usuarioController_1.editarPerfil);
router.put('/perfil/:id', uploadImagen_1.uploadImagenUsuario.single('imagen'), usuarioController_1.editarPerfil);
router.get('/perfil', validarAutenticacion_1.validarAutenticacion, usuarioController_2.obtenerPerfil);
router.post('/registrar-multiples', usuarioController.registrarMultiplesUsuarios);
exports.default = router;
