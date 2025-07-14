"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventasPorMes = exports.ventasHoy = exports.totalUsuarios = void 0;
const client_1 = __importDefault(require("../../prisma/client"));
const totalUsuarios = async (_req, res) => {
    try {
        const total = await client_1.default.usuario.count();
        res.json({ total });
    }
    catch (error) {
        console.error('❌ Error en totalUsuarios:', error);
        res.status(500).json({ error: 'Error al contar usuarios' });
    }
};
exports.totalUsuarios = totalUsuarios;
const ventasHoy = async (_req, res) => {
    try {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        const mañana = new Date(hoy);
        mañana.setDate(hoy.getDate() + 1);
        // Buscar ventas de hoy
        const ventas = await client_1.default.venta.findMany({
            where: {
                fecha: {
                    gte: hoy,
                    lt: mañana
                }
            }
        });
        const totalHoy = ventas.reduce((acc, venta) => { var _a; return acc + ((_a = venta.total) !== null && _a !== void 0 ? _a : 0); }, 0);
        // Buscar ventas de ayer
        const ayer = new Date(hoy);
        ayer.setDate(hoy.getDate() - 1);
        const ventasAyer = await client_1.default.venta.findMany({
            where: {
                fecha: {
                    gte: ayer,
                    lt: hoy
                }
            }
        });
        const totalAyer = ventasAyer.reduce((acc, venta) => { var _a; return acc + ((_a = venta.total) !== null && _a !== void 0 ? _a : 0); }, 0);
        const crecimiento = totalAyer > 0 ? ((totalHoy - totalAyer) / totalAyer) * 100 : 0;
        res.json({ totalHoy, crecimiento });
    }
    catch (error) {
        console.error('❌ Error en ventasHoy:', error);
        res.status(500).json({ error: 'Error al calcular las ventas de hoy' });
    }
};
exports.ventasHoy = ventasHoy;
const ventasPorMes = async (_req, res) => {
    try {
        const añoActual = new Date().getFullYear();
        const ventas = await client_1.default.venta.findMany({
            where: {
                fecha: {
                    gte: new Date(`${añoActual}-01-01T00:00:00.000Z`),
                    lt: new Date(`${añoActual + 1}-01-01T00:00:00.000Z`)
                }
            }
        });
        const totalesPorMes = Array(12).fill(0);
        ventas.forEach((venta) => {
            const mes = new Date(venta.fecha).getMonth(); // 0 = Enero, 11 = Diciembre
            totalesPorMes[mes] += venta.total;
        });
        res.json({ totalesPorMes });
    }
    catch (error) {
        console.error('❌ Error en ventasPorMes:', error);
        res.status(500).json({ error: 'Error al obtener las ventas por mes' });
    }
};
exports.ventasPorMes = ventasPorMes;
