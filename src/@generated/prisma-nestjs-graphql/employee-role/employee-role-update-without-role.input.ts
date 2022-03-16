import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EmployeeUpdateOneRequiredWithoutEmployeeRoleInput } from '../employee/employee-update-one-required-without-employee-role.input';

@InputType()
export class EmployeeRoleUpdateWithoutRoleInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EmployeeUpdateOneRequiredWithoutEmployeeRoleInput, {nullable:true})
    employee?: EmployeeUpdateOneRequiredWithoutEmployeeRoleInput;
}
