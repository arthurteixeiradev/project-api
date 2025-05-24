import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CoffeeInfo } from './types/Coffee';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/coffees')
  getCoffees(): CoffeeInfo[] {
    return this.appService.getCoffees();
  }

  @Get('/coffees/:id/detalhes')
  getCoffeeDetails(@Param('id') id: number): CoffeeInfo {
    const coffee = this.appService.getCoffeeById(id);

    if (!coffee) {
      throw new NotFoundException(`Café com id '${id}' não encontrado.`);
    }

    return coffee;
  }

  @Post('/create-coffee')
  createCoffee(@Body() coffee: CoffeeInfo) {
    return this.appService.postCoffee(coffee);
  }
}
