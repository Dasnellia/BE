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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerJuegosMasVendidos = exports.crearJuegosMasivos = exports.eliminarTodos = exports.filtrarJuegos = exports.eliminarJuego = exports.actualizarJuego = exports.crearJuego = exports.obtenerPorId = exports.obtenerJuegos = exports.obtenerTodos = void 0;
const juegoService = __importStar(require("../services/juegoService"));
const client_1 = __importDefault(require("../../prisma/client"));
const obtenerTodos = async (_req, res) => {
    const juegos = await juegoService.obtenerTodos();
    res.json(juegos);
};
exports.obtenerTodos = obtenerTodos;
const obtenerJuegos = async (req, res) => {
    try {
        const juegos = await client_1.default.juego.findMany({
            include: {
                categoria: true,
                plataformas: true,
                comentarios: true,
                _count: {
                    select: { ventas: true }
                }
            }
        });
        res.json(juegos);
    }
    catch (error) {
        console.error("Error al obtener juegos:", error);
        res.status(500).json({ mensaje: "Error del servidor" });
    }
};
exports.obtenerJuegos = obtenerJuegos;
const obtenerPorId = async (req, res) => {
    const id = parseInt(req.params.id);
    const juego = await juegoService.obtenerPorId(id);
    if (!juego)
        res.status(404).json({ error: 'Juego no encontrado' });
    res.json(juego);
};
exports.obtenerPorId = obtenerPorId;
const crearJuego = async (req, res) => {
    try {
        const nuevoJuego = await juegoService.crearJuego(req.body);
        res.status(201).json(nuevoJuego);
    }
    catch (error) {
        res.status(400).json({ error: 'Error al crear juego', detalle: error });
    }
};
exports.crearJuego = crearJuego;
const actualizarJuego = async (req, res) => {
    try {
        const juego = await juegoService.actualizarJuego(+req.params.id, req.body);
        res.json(juego);
    }
    catch (error) {
        res.status(400).json({ error: 'Error al actualizar juego', detalle: error });
    }
};
exports.actualizarJuego = actualizarJuego;
const eliminarJuego = async (req, res) => {
    try {
        await juegoService.eliminarJuego(+req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: 'Error al eliminar juego', detalle: error });
    }
};
exports.eliminarJuego = eliminarJuego;
const filtrarJuegos = async (req, res) => {
    const { nombre, plataforma, precioMin, precioMax } = req.query;
    const juegos = await juegoService.filtrarConLogica({
        nombre: nombre,
        plataforma: plataforma,
        precioMin: precioMin ? parseFloat(precioMin) : undefined,
        precioMax: precioMax ? parseFloat(precioMax) : undefined,
    });
    res.json(juegos);
};
exports.filtrarJuegos = filtrarJuegos;
//TEMPORAL PARA ELIMINAR TODOS LOS JUEGOS
const eliminarTodos = async (_req, res) => {
    try {
        await client_1.default.juego.deleteMany(); // Elimina todos los juegos
        res.json({ mensaje: 'Todos los juegos fueron eliminados.' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar todos los juegos', detalle: error });
    }
};
exports.eliminarTodos = eliminarTodos;
const crearJuegosMasivos = async (req, res) => {
    const juegos = req.body;
    try {
        for (const juego of juegos) {
            // Buscar la categoría por nombre
            const categoria = await client_1.default.categoria.findFirst({
                where: { nombre: juego.categoria }
            });
            if (!categoria) {
                throw new Error(`❌ Categoría no encontrada: ${juego.categoria}`);
            }
            // Buscar plataformas por nombre
            const plataformas = await client_1.default.plataforma.findMany({
                where: { nombre: { in: juego.plataformas } }
            });
            if (plataformas.length !== juego.plataformas.length) {
                throw new Error(`❌ Algunas plataformas no existen: ${juego.plataformas.join(', ')}`);
            }
            await client_1.default.juego.create({
                data: {
                    nombre: juego.nombre,
                    precio: juego.precio,
                    stock: juego.stock,
                    rating: juego.rating,
                    imagen: juego.imagen,
                    descripcion: juego.descripcion,
                    descripcionLarga: juego.descripcionLarga,
                    trailerURL: juego.trailerURL,
                    descuento: juego.descuento || 0,
                    lanzamiento: new Date(juego.lanzamiento),
                    categoria: {
                        connect: { id: categoria.id }
                    },
                    plataformas: {
                        connect: plataformas.map((p) => ({ id: p.id }))
                    },
                    galeria: { set: juego.galeria },
                    caracteristicas: { set: juego.caracteristicas }
                }
            });
        }
        res.status(201).json({ mensaje: '✅ Juegos registrados correctamente' });
    }
    catch (error) {
        console.error('❌ Error al registrar juegos:', error.message);
        res.status(500).json({ error: `Error al registrar juegos: ${error.message}` });
    }
};
exports.crearJuegosMasivos = crearJuegosMasivos;
const obtenerJuegosMasVendidos = async (_req, res) => {
    try {
        const juegos = await client_1.default.juego.findMany({
            include: {
                _count: {
                    select: { ventas: true },
                },
                categoria: true,
                plataformas: true,
            },
        });
        // Ordenar por cantidad de ventas (ventas._count.ventas)
        const ordenados = juegos.sort((a, b) => b._count.ventas - a._count.ventas);
        res.json(ordenados);
    }
    catch (error) {
        console.error('Error al obtener los juegos más vendidos:', error);
        res.status(500).json({ error: 'Error al obtener los juegos más vendidos' });
    }
};
exports.obtenerJuegosMasVendidos = obtenerJuegosMasVendidos;
