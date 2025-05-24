import { BadRequestException, Injectable } from '@nestjs/common';
import { CoffeeInfo } from './types/Coffee';

@Injectable()
export class AppService {
  private readonly coffees: CoffeeInfo[] = [
    {
      id: 1,
      nome: 'Paraíso',
      tipo: 'Forte',
      quantidade: 10,
      preco: 10,
      descricao: 'Café de qualidade',
      tags: ['tradicional'],
    },
    {
      id: 2,
      nome: 'Jalapão',
      tipo: 'Forte',
      quantidade: 10,
      preco: 10,
      descricao: 'Café de qualidade',
      tags: ['tradicional', 'vegano'],
    },
    {
      id: 3,
      nome: '3 Corações',
      tipo: 'Forte',
      quantidade: 10,
      preco: 10,
      descricao: 'Café de qualidade',
      tags: ['tradicional', 'Extra forte'],
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getCoffees(): CoffeeInfo[] {
    return this.coffees;
  }

  getCoffeeById(id: number): CoffeeInfo | undefined {
    return this.coffees.find((coffee: CoffeeInfo) => coffee.id === id);
  }

  postCoffee(coffee: CoffeeInfo) {
    const coffeeExists = this.coffees.find(
      (c: CoffeeInfo) => c.id === coffee.id,
    );

    if (coffeeExists) {
      throw new BadRequestException(
        `Café com id '${coffee.id}' ja cadastrado.`,
      );
    }

    return;
  }
}
