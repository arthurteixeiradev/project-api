import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoffeeDto } from '../../dto/CreateCoffeeDto.ts';
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
  getCoffeeDetails(@Param('id') id: number): CoffeeDto | undefined {
    return this.coffeesService.getCoffeeById(id);
  }

  @Post('/create-coffee')
  createCoffee(@Body() coffee: CoffeeDto) {
    return this.coffeesService.postCoffee(coffee);
  }
}
