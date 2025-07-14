"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventaController_1 = require("../controllers/ventaController");
const router = (0, express_1.Router)();
router.post('/procesar-compra', ventaController_1.procesarCompra);
router.get('/verificar-compra/:usuarioId/:juegoId', ventaController_1.verificarCompra);
router.post('/registrar-multiples', ventaController_1.registrarMultiplesVentas);
exports.default = router;
