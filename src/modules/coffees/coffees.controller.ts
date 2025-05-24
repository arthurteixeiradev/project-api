import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CoffeeDto } from '../../dto/CoffeeDTO';
import { CoffeesService } from './coffees.service';

@Controller()
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  getHello(): string {
    return this.coffeesService.getHello();
  }

  @Get('/coffees')
  getCoffees(): CoffeeDto[] {
    return this.coffeesService.getCoffees();
  }

  @Get('/coffees/:id/detalhes')
  getCoffeeDetails(@Param('id') id: number): CoffeeDto {
    const coffee = this.coffeesService.getCoffeeById(id);

    if (!coffee) {
      throw new NotFoundException(`Café com id '${id}' não encontrado.`);
    }

    return coffee;
  }

  @Post('/create-coffee')
  createCoffee(@Body() coffee: CoffeeDto) {
    return this.coffeesService.postCoffee(coffee);
  }
}
