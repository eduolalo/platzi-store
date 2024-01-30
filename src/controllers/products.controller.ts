import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/')
  produts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): object {
    console.log('limit', limit);
    return {
      limit,
      offset,
      brand,
    };
  }

  @Get('/filter')
  filter(): object {
    return { message: 'yo soy un filter' };
  }

  @Get('/:productId')
  get(@Param('productId') productId: string): object {
    return { message: `product ${productId}` };
  }

  @Post()
  create(@Body() payload: any): object {
    return { message: 'yo soy un post', payload };
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() payload: any): object {
    return { id, payload };
  }

  @Delete('/:id')
  delete(@Param('id') id: number): object {
    return { id };
  }
}
