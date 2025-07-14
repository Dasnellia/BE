"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerNoticias = exports.editarNoticia = exports.eliminarNoticia = exports.crearNoticia = exports.listarNoticias = void 0;
const client_1 = __importDefault(require("../../prisma/client"));
const listarNoticias = async (_req, res) => {
    const noticias = await client_1.default.noticia.findMany({ orderBy: { fecha: 'desc' } });
    res.json(noticias);
};
exports.listarNoticias = listarNoticias;
const crearNoticia = async (req, res) => {
    try {
        const { name, descripcion } = req.body;
        if (!name || !descripcion || !req.file) {
            return res.status(400).json({ error: 'Todos los campos (nombre, descripción e imagen) son obligatorios' });
        }
        const imagenRuta = `/imagenes/noticias/${req.file.filename}`;
        const noticia = await client_1.default.noticia.create({
            data: {
                titulo: name,
                contenido: descripcion,
                imagen: imagenRuta,
            },
        });
        res.status(201).json(noticia);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear la noticia' });
    }
};
exports.crearNoticia = crearNoticia;
const eliminarNoticia = async (req, res) => {
    const { id } = req.params;
    try {
        await client_1.default.noticia.delete({ where: { id: Number(id) } });
        res.json({ mensaje: 'Noticia eliminada correctamente' });
    }
    catch (error) {
        res.status(500).json({ error: 'No se pudo eliminar la noticia' });
    }
};
exports.eliminarNoticia = eliminarNoticia;
const editarNoticia = async (req, res) => {
    const { id } = req.params;
    const { name, descripcion, foto } = req.body;
    try {
        const data = {};
        if (name)
            data.titulo = name;
        if (descripcion)
            data.contenido = descripcion;
        if (foto)
            data.imagen = foto;
        const noticiaActualizada = await client_1.default.noticia.update({
            where: { id: Number(id) },
            data,
        });
        res.json(noticiaActualizada);
    }
    catch (error) {
        res.status(500).json({ error: 'No se pudo editar la noticia' });
    }
};
exports.editarNoticia = editarNoticia;
const obtenerNoticias = async (_req, res) => {
    try {
        const noticias = await client_1.default.noticia.findMany({
            orderBy: { fecha: 'desc' },
            take: 3,
        });
        res.json(noticias);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener noticias' });
    }
};
exports.obtenerNoticias = obtenerNoticias;
