import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Wevos perro';
  }

  @Get('/products/:productId')
  produts(@Param('productId') productId: string): string {
    return `product ${productId}`;
  }

  @Get('/categories/:id/products/:productId')
  categories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ): string {
    return `category ${id}, product ${productId}`;
  }
}
