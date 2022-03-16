import { CreateEmployeeDto } from './create-employee.dto';
import { IsEmail, IsString, Matches } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @Matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)
  phoneNumber?: string;
}
