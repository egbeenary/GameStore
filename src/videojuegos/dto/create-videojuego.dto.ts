import { IsString } from "class-validator";

export class CreateVideojuegoDto {
    
    @IsString()
    readonly nombre: string;

    @IsString()
    readonly genero: string;

    @IsString()
    readonly descripcion: string;

    @IsString()
    readonly plataforma: string;

}
