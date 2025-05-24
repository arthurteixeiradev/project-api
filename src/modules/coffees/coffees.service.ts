import { BadRequestException, Injectable } from '@nestjs/common';
import { CoffeeDto } from '../../dto/CoffeeDTO';

@Injectable()
export class CoffeesService {
  private readonly coffees: CoffeeDto[] = [
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

  getCoffees(): CoffeeDto[] {
    return this.coffees;
  }

  getCoffeeById(id: number): CoffeeDto | undefined {
    return this.coffees.find((coffee) => coffee.id === id);
  }

  postCoffee(coffee: CoffeeDto) {
    const coffeeExists = this.coffees.find((c) => c.id === coffee.id);

    if (coffeeExists) {
      throw new BadRequestException(
        `Café com id '${coffee.id}' já cadastrado.`,
      );
    }

    this.coffees.push(coffee);

    return coffee;
  }
}
