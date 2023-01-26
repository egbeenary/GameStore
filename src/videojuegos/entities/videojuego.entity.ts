import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { Document } from 'mongoose';

@Schema()
export class Videojuego extends Document {
    @Prop() 
    nombre: string;
    
    @Prop()
    genero: string;
    
    @Prop()
    descripcion: string;

    @Prop()
    plataforma: string;
}

export const VideojuegoSchema = SchemaFactory.createForClass(Videojuego);