import { Controller, Get } from '@nestjs/common';

@Controller('saludo')
export class SaludoController {

    @Get()
    getSaludo() {
        return "¡Bienvenido a GameStore!";
    }
    
}