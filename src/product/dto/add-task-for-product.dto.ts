import { IsNumber } from 'class-validator';

export class AddTaskForProductDto {
  @IsNumber()
  id: number;
}
