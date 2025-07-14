"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noticiaController_1 = require("../controllers/noticiaController");
const validarAutenticacion_1 = require("../../middleware/validarAutenticacion");
const validarRolAdmin_1 = require("../../middleware/validarRolAdmin");
const uploadImagenNoticia_1 = __importDefault(require("../../middleware/uploadImagenNoticia"));
const router = (0, express_1.Router)();
router.post('/', validarAutenticacion_1.validarAutenticacion, validarRolAdmin_1.validarRolAdmin, uploadImagenNoticia_1.default.single('foto'), noticiaController_1.crearNoticia);
router.put('/:id', validarAutenticacion_1.validarAutenticacion, validarRolAdmin_1.validarRolAdmin, uploadImagenNoticia_1.default.single('foto'), noticiaController_1.editarNoticia);
router.delete('/:id', validarAutenticacion_1.validarAutenticacion, validarRolAdmin_1.validarRolAdmin, noticiaController_1.eliminarNoticia);
router.get('/', noticiaController_1.listarNoticias);
router.get('/recientes', noticiaController_1.obtenerNoticias);
exports.default = router;
