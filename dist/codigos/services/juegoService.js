"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtrarJuegos = exports.eliminarJuego = exports.actualizarJuego = exports.crearJuego = exports.obtenerPorId = exports.obtenerTodos = exports.filtrarConLogica = void 0;
const client_1 = __importDefault(require("../../prisma/client"));
const filtrarConLogica = async (filtros) => {
    const { nombre, plataforma, precioMin, precioMax } = filtros;
    return client_1.default.juego.findMany({
        where: {
            nombre: nombre ? { contains: nombre, mode: 'insensitive' } : undefined,
            precio: {
                gte: precioMin !== null && precioMin !== void 0 ? precioMin : undefined,
                lte: precioMax !== null && precioMax !== void 0 ? precioMax : undefined,
            },
            plataformas: plataforma
                ? {
                    some: {
                        nombre: plataforma,
                    },
                }
                : undefined,
        },
        include: {
            categoria: true,
            plataformas: true,
        },
    });
};
exports.filtrarConLogica = filtrarConLogica;
const obtenerTodos = () => client_1.default.juego.findMany({
    include: {
        categoria: true,
        plataformas: true,
    },
});
exports.obtenerTodos = obtenerTodos;
const obtenerPorId = (id) => {
    return client_1.default.juego.findUnique({
        where: { id },
        include: {
            categoria: true,
            plataformas: true,
        },
    });
};
exports.obtenerPorId = obtenerPorId;
const crearJuego = async (data) => {
    const { plataformaIds, categoriaId } = data, juegoData = __rest(data, ["plataformaIds", "categoriaId"]);
    return client_1.default.juego.create({
        data: Object.assign(Object.assign({}, juegoData), { categoria: { connect: { id: categoriaId } }, plataformas: {
                connect: plataformaIds.map((id) => ({ id }))
            } }),
        include: {
            categoria: true,
            plataformas: true
        }
    });
};
exports.crearJuego = crearJuego;
const actualizarJuego = (id, data) => {
    return client_1.default.juego.update({
        where: { id },
        data: Object.assign(Object.assign({}, data), { categoria: data.categoria
                ? { connect: { nombre: data.categoria } }
                : undefined, plataformas: data.plataformas
                ? {
                    set: data.plataformas.map((nombre) => ({ nombre })),
                }
                : undefined }),
        include: {
            categoria: true,
            plataformas: true,
        },
    });
};
exports.actualizarJuego = actualizarJuego;
const eliminarJuego = (id) => {
    return client_1.default.juego.delete({
        where: { id },
    });
};
exports.eliminarJuego = eliminarJuego;
const filtrarJuegos = async (nombre, categoria, plataforma) => {
    return client_1.default.juego.findMany({
        where: {
            nombre: nombre ? { contains: nombre, mode: 'insensitive' } : undefined,
            categoria: categoria ? { nombre: categoria } : undefined,
            plataformas: plataforma
                ? {
                    some: {
                        nombre: plataforma,
                    },
                }
                : undefined,
        },
        include: {
            categoria: true,
            plataformas: true,
        },
    });
};
exports.filtrarJuegos = filtrarJuegos;
