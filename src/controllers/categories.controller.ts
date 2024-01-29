import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/:id/products/:productId')
  categories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ): string {
    return `category ${id}, product ${productId}`;
  }
}
