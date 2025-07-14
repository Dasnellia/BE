"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComentario = exports.getComentarios = void 0;
const client_1 = __importDefault(require("../../prisma/client"));
// Obtener los comentarios de un juego
const getComentarios = async (req, res) => {
    const { juegoId } = req.params;
    try {
        const comentarios = await client_1.default.comentario.findMany({
            where: { juegoId: parseInt(juegoId) },
            orderBy: { date: 'desc' },
        });
        res.json(comentarios);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los comentarios' });
    }
};
exports.getComentarios = getComentarios;
// Agregar un nuevo comentario
const addComentario = async (req, res) => {
    const { juegoId, user, rating, text } = req.body;
    try {
        const nuevoComentario = await client_1.default.comentario.create({
            data: {
                juegoId: parseInt(juegoId),
                user,
                rating,
                text,
                date: new Date(),
            },
        });
        res.json(nuevoComentario);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al agregar el comentario' });
    }
};
exports.addComentario = addComentario;
