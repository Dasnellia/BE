"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarMultiplesVentas = exports.verificarCompra = exports.procesarCompra = void 0;
const client_1 = __importDefault(require("../../prisma/client"));
const emailService_1 = require("../services/emailService");
const procesarCompra = async (req, res) => {
    try {
        const { usuarioId, juegos, total } = req.body;
        if (!usuarioId || !Array.isArray(juegos) || juegos.length === 0 || total === undefined) {
            res.status(400).json({ error: 'Datos incompletos para procesar la compra' });
            return;
        }
        const usuario = await client_1.default.usuario.findUnique({ where: { id: usuarioId } });
        if (!usuario) {
            res.status(404).json({ error: 'Usuario no encontrado' });
            return;
        }
        const resumenJuegos = [];
        for (const juego of juegos) {
            const clave = (0, emailService_1.generarClaveActivacion)();
            await client_1.default.venta.create({
                data: {
                    usuarioId,
                    juegoId: juego.id,
                    clave,
                    total: juego.precio
                },
            });
            resumenJuegos.push({
                nombre: juego.nombre,
                precio: juego.precio,
                clave,
            });
        }
        await (0, emailService_1.enviarResumenCompra)(usuario.correo, usuario.nickname, resumenJuegos, total);
        console.log(`✅ Correo enviado a ${usuario.correo}`);
        res.json({ mensaje: 'Compra registrada y correo enviado con éxito' });
    }
    catch (error) {
        console.error('❌ Error en procesarCompra:', error);
        res.status(500).json({ error: 'Error al procesar la compra' });
    }
};
exports.procesarCompra = procesarCompra;
const verificarCompra = async (req, res) => {
    const usuarioId = Number(req.params.usuarioId);
    const juegoId = Number(req.params.juegoId);
    if (!usuarioId || !juegoId) {
        res.status(400).json({ error: 'Faltan parámetros usuarioId o juegoId' });
        return;
    }
    const venta = await client_1.default.venta.findFirst({
        where: {
            usuarioId,
            juegoId
        }
    });
    if (venta) {
        res.json({ comprado: true });
    }
    else {
        res.json({ comprado: false });
    }
};
exports.verificarCompra = verificarCompra;
const registrarMultiplesVentas = async (req, res) => {
    try {
        const ventas = req.body;
        if (!Array.isArray(ventas) || ventas.length === 0) {
            return res.status(400).json({ error: 'Se requiere una lista de ventas' });
        }
        const faltantes = ventas.filter(v => !v.usuarioId || !v.juegoId || !v.clave || typeof v.total !== 'number');
        if (faltantes.length > 0) {
            return res.status(400).json({ error: 'Algunas ventas tienen datos incompletos' });
        }
        const nuevasVentas = await client_1.default.venta.createMany({
            data: ventas
        });
        res.status(201).json({
            mensaje: 'Ventas registradas con éxito',
            cantidad: nuevasVentas.count
        });
    }
    catch (error) {
        console.error('❌ Error al registrar múltiples ventas:', error.message, error.stack);
        res.status(500).json({ error: 'Error al registrar las ventas' });
    }
};
exports.registrarMultiplesVentas = registrarMultiplesVentas;
