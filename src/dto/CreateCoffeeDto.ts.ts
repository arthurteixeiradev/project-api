import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CoffeeDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsNumber()
  quantidade: number;

  @IsNumber()
  preco: number;

  @IsString()
  descricao: string;

  @IsArray()
  tags: string[];
}
