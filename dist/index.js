"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const usuarioRoutes_1 = __importDefault(require("./codigos/routes/usuarioRoutes"));
const juegoRoutes_1 = __importDefault(require("./codigos/routes/juegoRoutes"));
const path_1 = __importDefault(require("path"));
const ventaRoutes_1 = __importDefault(require("./codigos/routes/ventaRoutes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const categoriasRoutes_1 = __importDefault(require("./codigos/routes/categoriasRoutes"));
const plataformasRoutes_1 = __importDefault(require("./codigos/routes/plataformasRoutes"));
const noticiaRoutes_1 = __importDefault(require("./codigos/routes/noticiaRoutes"));
const estadisticasRoutes_1 = __importDefault(require("./codigos/routes/estadisticasRoutes"));
const comentarioRoutes_1 = __importDefault(require("./codigos/routes/comentarioRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const rutaImagenes = path_1.default.join(process.cwd(), 'imagenes');
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/api/usuarios', usuarioRoutes_1.default);
app.use('/api/juegos', juegoRoutes_1.default);
app.use('/api/ventas', ventaRoutes_1.default);
app.use('/static', express_1.default.static(path_1.default.join(process.cwd(), 'imagenes')));
app.use('/api/categorias', categoriasRoutes_1.default);
app.use('/api/plataformas', plataformasRoutes_1.default);
app.use('/api/noticias', noticiaRoutes_1.default);
app.use('/imagenes', express_1.default.static(path_1.default.join(process.cwd(), 'imagenes')));
app.use('/api/estadisticas', estadisticasRoutes_1.default);
app.use('/api/comentarios', comentarioRoutes_1.default);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
