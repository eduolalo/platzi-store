import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Wevos perro';
  }

  @Get('/products')
  produts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): string {
    return `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`;
  }

  @Get('/products/filter')
  produtFilter(): string {
    return `yo soy un filter`;
  }

  @Get('/products/:productId')
  produt(@Param('productId') productId: string): string {
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
