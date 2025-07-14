"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriasController_1 = require("../controllers/categoriasController");
const router = (0, express_1.Router)();
router.post('/', categoriasController_1.crearCategoria);
router.get('/', categoriasController_1.listarCategorias);
router.post('/multiples', categoriasController_1.crearMultiplesCategorias);
exports.default = router;
