"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComentario = exports.getComentarios = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener los comentarios de un juego
const getComentarios = async (req, res) => {
    const { juegoId } = req.params;
    try {
        const comentarios = await prisma.comentario.findMany({
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
        const nuevoComentario = await prisma.comentario.create({
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
