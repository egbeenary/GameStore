import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateVideojuegoDto } from './dto/create-videojuego.dto';
import { UpdateVideojuegoDto } from './dto/update-videojuego.dto';
import { VideojuegosService } from './videojuegos.service';

@Controller('videojuegos')
export class VideojuegosController {

    constructor(private readonly videojuegosService: VideojuegosService) {}
    
    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto) {
        return this.videojuegosService.findAll(paginationQuery);
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.videojuegosService.findOne(id);
    }
    
    @Post()
    create(@Body() createVideojuegoDto: CreateVideojuegoDto) {
        return this.videojuegosService.create(createVideojuegoDto);
    }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateVideojuegoDto: UpdateVideojuegoDto) {
        return this.videojuegosService.update(id, updateVideojuegoDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.videojuegosService.remove(id);
    }
}