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
  @IsNotEmpty()
  quantidade: number;

  @IsNumber()
  @IsNotEmpty()
  preco: number;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsArray()
  @IsNotEmpty()
  tags: string[];
}
