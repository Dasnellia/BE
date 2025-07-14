"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadisticasController_1 = require("../controllers/estadisticasController");
const router = (0, express_1.Router)();
router.get('/ventas-hoy', estadisticasController_1.ventasHoy);
router.get('/total-usuarios', estadisticasController_1.totalUsuarios);
router.get('/ventas-por-mes', estadisticasController_1.ventasPorMes);
exports.default = router;
