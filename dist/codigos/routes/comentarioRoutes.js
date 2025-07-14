"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comentariosController_1 = require("../controllers/comentariosController");
const router = express_1.default.Router();
// Ruta para obtener los comentarios de un juego
router.get('/:juegoId', comentariosController_1.getComentarios);
// Ruta para agregar un nuevo comentario
router.post('/', comentariosController_1.addComentario);
exports.default = router;
