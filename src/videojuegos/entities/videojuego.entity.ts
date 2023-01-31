import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Videojuego extends Document {
    @Prop() 
    @Field(type => String)
    nombre: string;
    
    @Field(type => String)
    @Prop()
    genero: string;
    
    @Prop()
    descripcion: string;

    @Prop()
    plataforma: string;
}

export const VideojuegoSchema = SchemaFactory.createForClass(Videojuego);