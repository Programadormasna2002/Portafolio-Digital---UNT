import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UnidadesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.unidad.findMany({
      orderBy: {
        orden: 'asc',
      },
      include: {
        _count: {
          select: {
            evidencias: true,
          },
        },
      },
    });
  }

  async findOneBySlug(slug: string) {
    const unidad = await this.prisma.unidad.findUnique({
      where: { slug },
      include: {
        evidencias: {
          orderBy: {
            orden: 'asc',
          },
        },
      },
    });

    if (!unidad) {
      throw new NotFoundException(
        `No existe una unidad con el slug: ${slug}`,
      );
    }

    return unidad;
  }
}