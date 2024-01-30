import {
  // ParseIntPipe,
  Controller,
  Delete,
  Param,
  Post,
  Body,
  Put,
  Get,
} from '@nestjs/common';

import { ProductService } from './../services/product.service';
import { ParseIntPipe } from './../common/parse-int/parse-int.pipe';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get('/')
  products(): object {
    return this.productService.findAll();
  }

  @Get('/filter')
  filter(): object {
    return { message: 'yo soy un filter' };
  }

  @Get('/:id')
  get(@Param('id', ParseIntPipe) id: number): object {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() payload: any): object {
    return this.productService.create(payload);
  }

  @Put('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any): object {
    return this.productService.update(id, payload);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): object {
    return { id };
  }
}
