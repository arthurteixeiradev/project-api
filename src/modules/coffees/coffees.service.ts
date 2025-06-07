import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CoffeeDto } from 'src/dto/CreateCoffeeDto.ts';

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
      date_created: '2025-05-31T23:10:35.000Z',
    },
    {
      id: 2,
      nome: 'Jalapão',
      tipo: 'Forte',
      quantidade: 10,
      preco: 10,
      descricao: 'Café de qualidade',
      tags: ['tradicional', 'vegano'],
      date_created: '2025-05-30T23:10:35.000Z',
    },
    {
      id: 3,
      nome: '3 Corações',
      tipo: 'Forte',
      quantidade: 10,
      preco: 10,
      descricao: 'Café de qualidade',
      tags: ['tradicional', 'Extra forte'],
      date_created: '2025-05-30T23:10:35.000Z',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getCoffees(): CoffeeDto[] {
    return this.coffees;
  }

  getCoffeeById(id: number): CoffeeDto | undefined {
    const coffee = this.coffees.find((coffee) => coffee.id === id);

    if (!coffee) {
      throw new NotFoundException(`Café com id '${id}' não encontrado.`);
    }

    return coffee;
  }

  postCoffee(coffee: CoffeeDto) {
    const coffeeExists = this.coffees.find((c) => c.id === coffee.id);

    if (coffeeExists) {
      throw new BadRequestException('Dados inválidos ou ID já existente.');
    }

    coffee.date_created = new Date().toISOString();

    this.coffees.push(coffee);

    return coffee;
  }

  getCoffeesByDate(
    startDateString?: string,
    endDateString?: string,
  ): CoffeeDto[] {
    let filteredCoffees = [...this.coffees];

    const startDate = startDateString ? new Date(startDateString) : null;
    const endDate = endDateString ? new Date(endDateString) : null;

    if (startDate) {
      filteredCoffees = filteredCoffees.filter((coffee) => {
        const coffeeDate = new Date(coffee.date_created);
        return coffeeDate >= startDate;
      });
    }

    if (endDate) {
      filteredCoffees = filteredCoffees.filter((coffee) => {
        const coffeeDate = new Date(coffee.date_created);
        return coffeeDate <= endDate;
      });
    }

    return filteredCoffees;
  }
}
