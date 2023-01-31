import { Query, Resolver } from "@nestjs/graphql";
import { Videojuego } from "./entities/videojuego.entity";
import { VideojuegosService } from "./videojuegos.service";

@Resolver(of => Videojuego)
export class VideojuegoResolver {
    constructor(
        private videojuegosService: VideojuegosService,
        ) {}
        
    @Query(returns => Videojuego)
    findOne() {
        return this.videojuegosService.findOne("63d18a381cf4230f2b27227c");
    }

    // @Query(returns => Videojuego)
    // findAll() {
    //     return this.videojuegosService.findAll();
    // }

}