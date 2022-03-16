import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutEmployeeRoleInput } from '../role/role-update-one-required-without-employee-role.input';

@InputType()
export class EmployeeRoleUpdateWithoutEmployeeInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RoleUpdateOneRequiredWithoutEmployeeRoleInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutEmployeeRoleInput;
}
