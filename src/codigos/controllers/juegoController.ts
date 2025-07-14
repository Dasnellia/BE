import { Request, Response } from 'express';
import * as juegoService from '../services/juegoService';
import prisma from '../../prisma/client';


export const obtenerTodos = async (_req: Request, res: Response) => {
  const juegos = await juegoService.obtenerTodos();
  res.json(juegos);
};

export const obtenerJuegos = async (req: Request, res: Response) => {
  try {
    const juegos = await prisma.juego.findMany({
      include: {
        categoria: true,
        plataformas: true,
        comentarios: true,
        _count: {
          select: { ventas: true }
        }
      }
    });

    res.json(juegos);
  } catch (error) {
    console.error("Error al obtener juegos:", error);
    res.status(500).json({ mensaje: "Error del servidor" });
  }
};

export const obtenerPorId = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const juego = await juegoService.obtenerPorId(id);

  if (!juego) res.status(404).json({ error: 'Juego no encontrado' });
  res.json(juego);
};
export const crearJuego = async (req: Request, res: Response) => {
  try {
    const nuevoJuego = await juegoService.crearJuego(req.body);
    res.status(201).json(nuevoJuego);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear juego', detalle: error });
  }
};

export const actualizarJuego = async (req: Request, res: Response) => {
  try {
    const juego = await juegoService.actualizarJuego(+req.params.id, req.body);
    res.json(juego);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar juego', detalle: error });
  }
};

export const eliminarJuego = async (req: Request, res: Response) => {
  try {
    await juegoService.eliminarJuego(+req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar juego', detalle: error });
  }
};

export const filtrarJuegos = async (req: Request, res: Response) => {
  const { nombre, plataforma, precioMin, precioMax } = req.query;

  const juegos = await juegoService.filtrarConLogica({
    nombre: nombre as string,
    plataforma: plataforma as string,
    precioMin: precioMin ? parseFloat(precioMin as string) : undefined,
    precioMax: precioMax ? parseFloat(precioMax as string) : undefined,
  });

  res.json(juegos);
};

//TEMPORAL PARA ELIMINAR TODOS LOS JUEGOS

export const eliminarTodos = async (_req: Request, res: Response) => {
  try {
    await prisma.juego.deleteMany(); // Elimina todos los juegos
    res.json({ mensaje: 'Todos los juegos fueron eliminados.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar todos los juegos', detalle: error });
  }
};

export const crearJuegosMasivos = async (req: Request, res: Response) => {
  const juegos = req.body;

  try {
    for (const juego of juegos) {
      // Buscar la categoría por nombre
      const categoria = await prisma.categoria.findFirst({
        where: { nombre: juego.categoria }
      });

      if (!categoria) {
        throw new Error(`❌ Categoría no encontrada: ${juego.categoria}`);
      }

      // Buscar plataformas por nombre
      const plataformas = await prisma.plataforma.findMany({
        where: { nombre: { in: juego.plataformas } }
      });

      if (plataformas.length !== juego.plataformas.length) {
        throw new Error(`❌ Algunas plataformas no existen: ${juego.plataformas.join(', ')}`);
      }

      await prisma.juego.create({
        data: {
          nombre: juego.nombre,
          precio: juego.precio,
          stock: juego.stock,
          rating: juego.rating,
          imagen: juego.imagen,
          descripcion: juego.descripcion,
          descripcionLarga: juego.descripcionLarga,
          trailerURL: juego.trailerURL,
          descuento: juego.descuento || 0,
          lanzamiento: new Date(juego.lanzamiento),
          categoria: {
            connect: { id: categoria.id }
          },
          plataformas: {
            connect: plataformas.map((p : {id : number}) => ({ id: p.id }))
          },
          galeria: { set: juego.galeria },
          caracteristicas: { set: juego.caracteristicas }
        }
      });
    }

    res.status(201).json({ mensaje: '✅ Juegos registrados correctamente' });
  } catch (error: any) {
    console.error('❌ Error al registrar juegos:', error.message);
    res.status(500).json({ error: `Error al registrar juegos: ${error.message}` });
  }
};

export const obtenerJuegosMasVendidos = async (_req: Request, res: Response) => {
  try {
    const juegos = await prisma.juego.findMany({
      include: {
        _count: {
          select: { ventas: true },
        },
        categoria: true,
        plataformas: true,
      },
    });

    // Ordenar por cantidad de ventas (ventas._count.ventas)
    const ordenados = juegos.sort((a, b) => b._count.ventas - a._count.ventas);

    res.json(ordenados);
  } catch (error) {
    console.error('Error al obtener los juegos más vendidos:', error);
    res.status(500).json({ error: 'Error al obtener los juegos más vendidos' });
  }
};