import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EmployeeUpdateOneRequiredWithoutEmployeeRoleInput } from '../employee/employee-update-one-required-without-employee-role.input';
import { RoleUpdateOneRequiredWithoutEmployeeRoleInput } from '../role/role-update-one-required-without-employee-role.input';

@InputType()
export class EmployeeRoleUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EmployeeUpdateOneRequiredWithoutEmployeeRoleInput, {nullable:true})
    employee?: EmployeeUpdateOneRequiredWithoutEmployeeRoleInput;

    @Field(() => RoleUpdateOneRequiredWithoutEmployeeRoleInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutEmployeeRoleInput;
}
