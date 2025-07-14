"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearMultiplesPlataformas = exports.obtenerPlataformas = exports.crearPlataforma = void 0;
const client_1 = __importDefault(require("../../prisma/client"));
const crearPlataforma = async (req, res) => {
    try {
        const { nombre } = req.body;
        const existente = await client_1.default.plataforma.findUnique({
            where: { nombre },
        });
        if (existente) {
            return res.status(400).json({ error: 'La plataforma ya existe.' });
        }
        const nueva = await client_1.default.plataforma.create({
            data: { nombre },
        });
        res.status(201).json(nueva);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear la plataforma' });
    }
};
exports.crearPlataforma = crearPlataforma;
const obtenerPlataformas = async (_req, res) => {
    try {
        const plataformas = await client_1.default.plataforma.findMany();
        res.json(plataformas);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener las plataformas' });
    }
};
exports.obtenerPlataformas = obtenerPlataformas;
const crearMultiplesPlataformas = async (req, res) => {
    const { plataformas } = req.body;
    try {
        const resultado = await client_1.default.plataforma.createMany({
            data: plataformas,
            skipDuplicates: true // evita duplicados por nombre
        });
        res.status(201).json({ mensaje: 'Plataformas creadas', resultado });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear plataformas', detalle: error });
    }
};
exports.crearMultiplesPlataformas = crearMultiplesPlataformas;
