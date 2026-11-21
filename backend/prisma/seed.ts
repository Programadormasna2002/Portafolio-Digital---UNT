import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL no está configurada');
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.evidencia.deleteMany();
  await prisma.unidad.deleteMany();
  await prisma.seccion.deleteMany();

  await prisma.unidad.createMany({
    data: [
      {
        titulo: 'Unidad I',
        slug: 'unidad-i',
        descripcion: 'Evidencias y actividades desarrolladas en la Unidad I.',
        orden: 1,
      },
      {
        titulo: 'Unidad II',
        slug: 'unidad-ii',
        descripcion: 'Evidencias y actividades desarrolladas en la Unidad II.',
        orden: 2,
      },
      {
        titulo: 'Unidad III',
        slug: 'unidad-iii',
        descripcion: 'Evidencias y actividades desarrolladas en la Unidad III.',
        orden: 3,
      },
    ],
  });

  await prisma.seccion.createMany({
    data: [
      {
        clave: 'PRESENTACION',
        titulo: 'Portafolio digital',
        contenido:
          'Portafolio de evidencias de comprensión y producción de textos.',
      },
      {
        clave: 'INTRODUCCION',
        titulo: 'Introducción',
        contenido:
          'Este portafolio reúne los trabajos, actividades y aprendizajes desarrollados durante el proceso formativo.',
      },
      {
        clave: 'CONCLUSION',
        titulo: 'Conclusión',
        contenido:
          'El uso de recursos digitales fortalece experiencias de aprendizaje dinámicas, inclusivas y significativas.',
      },
      {
        clave: 'REFLEXION',
        titulo: 'Reflexión',
        contenido:
          'La tecnología es una aliada para enseñar, aprender y transformar la educación con creatividad y sensibilidad.',
      },
    ],
  });

  console.log('Datos iniciales creados correctamente.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });