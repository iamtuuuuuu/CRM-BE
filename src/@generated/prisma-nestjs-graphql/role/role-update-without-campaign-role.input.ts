import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EmployeeRoleUpdateManyWithoutRoleInput } from '../employee-role/employee-role-update-many-without-role.input';

@InputType()
export class RoleUpdateWithoutCampaignRoleInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;

    @Field(() => EmployeeRoleUpdateManyWithoutRoleInput, {nullable:true})
    EmployeeRole?: EmployeeRoleUpdateManyWithoutRoleInput;
}
