import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeeDto } from 'src/dto/CreateCoffeeDto.ts';

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

  @Get('/coffees/create-query-all')
  coffeeQueryAll(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ): CoffeeDto[] {
    return this.coffeesService.getCoffeesByDate(startDate, endDate);
  }
}
