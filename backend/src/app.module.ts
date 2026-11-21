import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UnidadesModule } from './unidades/unidades.module';

@Module({
  imports: [PrismaModule, UnidadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}