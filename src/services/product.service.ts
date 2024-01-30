import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: any): Product {
    const newProduct = {
      id: this.products.length + 1,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any): Product {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products[index] = {
      ...this.products[index],
      ...payload,
    };
    return this.products[index];
  }

  delete(id: number): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const product = this.products[index];
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return product;
  }
}
