import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Wevos perro';
  }

  @Get('/new')
  newEndpoint(): string {
    return '¿Cómo andamios?';
  }

  @Get('/hola')
  hola(): string {
    return '¿Soy o me parezco?';
  }
}
