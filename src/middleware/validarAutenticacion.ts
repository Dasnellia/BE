import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const validarAutenticacion = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

  console.log('🔐 Cookie recibida:', req.cookies?.token);
  console.log('🔐 Header Authorization:', req.headers.authorization);

  if (!token) {
    console.warn('❌ No se recibió token');
    return res.status(401).json({ error: 'Token requerido' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    console.log('✅ Token decodificado correctamente:', decoded);
    req.usuario = decoded as any;
    next();
  } catch (err) {
    console.error('❌ Token inválido o expirado');
    res.status(403).json({ error: 'Token inválido o expirado' });
  }
};