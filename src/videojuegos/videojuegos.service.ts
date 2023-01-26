import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundError } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateVideojuegoDto } from './dto/create-videojuego.dto';
import { UpdateVideojuegoDto } from './dto/update-videojuego.dto';
import { Videojuego } from './entities/videojuego.entity';

@Injectable()
export class VideojuegosService {

    constructor(
        @InjectModel(Videojuego.name) private readonly  videojuegoModel: Model<Videojuego>,
        ) {}
    
    findAll(paginationQuery: PaginationQueryDto) {
        const { limit, offset } = paginationQuery;
        return this.videojuegoModel
        .find()
        .skip(offset)
        .limit(limit)
        .exec();
    }
    
    async findOne(id: string) {
        const videojuego = await this.videojuegoModel.findOne({ _id: id }).exec();
        if(!Videojuego) {
            throw new NotFoundException(`El videojuego #${id} no se encontró`)
        }
        return videojuego;
    }
    
    create(createVideojuegoDto: CreateVideojuegoDto) {
        const videojuego = new this.videojuegoModel(createVideojuegoDto);
        return videojuego.save();
    }
    
    async update(id: string, updateVideojuegoDto: UpdateVideojuegoDto) {
        const existingVideojuego = await this.videojuegoModel
            .findOneAndUpdate({ _id: id }, { $set: updateVideojuegoDto }, { new: true })
            .exec();
        if (!existingVideojuego) {
            throw new NotFoundException(`El videojuego #${id} no se encontró`)
        }

        return existingVideojuego;
    }
    
    async remove(id: string) {
        const videojuego = await this.findOne(id);
        return videojuego.remove();
    }  
}