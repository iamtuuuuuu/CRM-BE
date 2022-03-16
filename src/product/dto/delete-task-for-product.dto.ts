import { IsArray } from 'class-validator';

export class DeleteTaskForProductDto {
  @IsArray()
  ids: number[];
}
