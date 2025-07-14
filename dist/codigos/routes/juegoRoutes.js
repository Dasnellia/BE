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
const juegoController = __importStar(require("../controllers/juegoController"));
const validarAutenticacion_1 = require("../../middleware/validarAutenticacion");
const usuarioController_1 = require("../controllers/usuarioController");
const router = (0, express_1.Router)();
router.get('/filtros', juegoController.filtrarJuegos);
router.get('/:id', juegoController.obtenerPorId);
router.post('/', juegoController.crearJuego);
router.put('/:id', juegoController.actualizarJuego);
router.delete('/:id', juegoController.eliminarJuego);
router.get('/', juegoController.obtenerTodos);
router.post('/cargar/masivos', juegoController.crearJuegosMasivos);
//TEMPORAL PARA ELIMINAR JUEGOS
router.delete('/', juegoController.eliminarTodos);
router.get('/perfil', validarAutenticacion_1.validarAutenticacion, usuarioController_1.obtenerPerfil);
router.get('/juegos/mas-vendidos', juegoController.obtenerJuegosMasVendidos);
exports.default = router;
