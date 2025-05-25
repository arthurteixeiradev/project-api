import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

describe('CoffeesController', () => {
  let coffeesController: CoffeesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CoffeesController],
      providers: [CoffeesService],
    }).compile();

    coffeesController = app.get<CoffeesController>(CoffeesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(coffeesController.getHello()).toBe('Hello World!');
    });
  });
});
