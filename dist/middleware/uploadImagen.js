"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImagenUsuario = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Crear el directorio destino si no existe
const rutaDestino = path_1.default.join(process.cwd(), 'imagenes', 'usuarios');
if (!fs_1.default.existsSync(rutaDestino)) {
    fs_1.default.mkdirSync(rutaDestino, { recursive: true });
}
// Configuración del almacenamiento
const storage = multer_1.default.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, rutaDestino);
    },
    filename: (_req, file, cb) => {
        const nombreFinal = `${Date.now()}-${file.originalname}`;
        cb(null, nombreFinal);
    },
});
// Middleware exportado
exports.uploadImagenUsuario = (0, multer_1.default)({ storage });
