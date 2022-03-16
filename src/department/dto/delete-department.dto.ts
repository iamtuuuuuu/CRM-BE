import { IsArray } from 'class-validator';

export class DeleteDepartmentDto {
  @IsArray()
  ids: number[];
}
