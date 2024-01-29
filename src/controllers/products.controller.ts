import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/')
  produts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): string {
    return `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`;
  }

  @Get('/filter')
  produtFilter(): string {
    return `yo soy un filter`;
  }

  @Get('/:productId')
  produt(@Param('productId') productId: string): string {
    return `product ${productId}`;
  }
}
