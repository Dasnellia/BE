"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plataformasController_1 = require("../controllers/plataformasController");
const router = (0, express_1.Router)();
router.post('/', plataformasController_1.crearPlataforma);
router.get('/', plataformasController_1.obtenerPlataformas);
router.post('/multiples', plataformasController_1.crearMultiplesPlataformas);
exports.default = router;
