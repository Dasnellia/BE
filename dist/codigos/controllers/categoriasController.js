"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearMultiplesCategorias = exports.listarCategorias = exports.crearCategoria = void 0;
const client_1 = __importDefault(require("../../prisma/client"));
const crearCategoria = async (req, res) => {
    const { nombre } = req.body;
    try {
        const categoria = await client_1.default.categoria.create({
            data: { nombre }
        });
        res.status(201).json(categoria);
    }
    catch (error) {
        res.status(400).json({ error: 'No se pudo crear la categoría' });
    }
};
exports.crearCategoria = crearCategoria;
const listarCategorias = async (_req, res) => {
    const categorias = await client_1.default.categoria.findMany();
    res.json(categorias);
};
exports.listarCategorias = listarCategorias;
const crearMultiplesCategorias = async (req, res) => {
    const { categorias } = req.body;
    try {
        const creadas = await client_1.default.categoria.createMany({
            data: categorias,
            skipDuplicates: true // evita duplicados
        });
        res.status(201).json({ mensaje: 'Categorías creadas', resultado: creadas });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear categorías', detalle: error });
    }
};
exports.crearMultiplesCategorias = crearMultiplesCategorias;
