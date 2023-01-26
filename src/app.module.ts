import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaludoController } from './saludo/saludo.controller';
import { VideojuegosController } from './videojuegos/videojuegos.controller';
import { VideojuegosService } from './videojuegos/videojuegos.service';
import { VideojuegosModule } from './videojuegos/videojuegos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [VideojuegosModule, MongooseModule.forRoot('mongodb://localhost:27017/gamestore')],
  controllers: [AppController, SaludoController],
  providers: [AppService],
})
export class AppModule {}
