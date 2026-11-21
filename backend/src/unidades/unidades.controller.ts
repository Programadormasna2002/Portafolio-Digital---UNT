import { Controller, Get, Param } from '@nestjs/common';
import { UnidadesService } from './unidades.service';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadesService: UnidadesService) {}

  @Get()
  findAll() {
    return this.unidadesService.findAll();
  }

  @Get(':slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.unidadesService.findOneBySlug(slug);
  }
}