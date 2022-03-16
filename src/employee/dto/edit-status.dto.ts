import { Status } from '../../casl/user.entity';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class EditEmployeeDto {
  @IsNotEmpty()
  @IsEnum(Status, { message: 'status must be active or ban' })
  status: Status;

  @IsNumber()
  departmentId?: number;
}
