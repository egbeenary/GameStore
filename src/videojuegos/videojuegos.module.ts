import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Videojuego, VideojuegoSchema } from './entities/videojuego.entity';
import { VideojuegosController } from './videojuegos.controller';
import { VideojuegoResolver } from './videojuegos.resolver';
import { VideojuegosService } from './videojuegos.service';

@Module({ 
    imports: [
        MongooseModule.forFeature([
            {
                name: Videojuego.name,
                schema: VideojuegoSchema,
            },
        ]),
    ],
    controllers: [VideojuegosController], 
    providers: [VideojuegosService, VideojuegoResolver],
})
export class VideojuegosModule {}
