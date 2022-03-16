import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DepartmentUpdateOneWithoutEmployeeInput } from '../department/department-update-one-without-employee.input';
import { EmailSentUpdateManyWithoutEmployeeInput } from '../email-sent/email-sent-update-many-without-employee.input';
import { EmployeeRoleUpdateManyWithoutEmployeeInput } from '../employee-role/employee-role-update-many-without-employee.input';

@InputType()
export class EmployeeUpdateWithoutProblemInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    status?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DepartmentUpdateOneWithoutEmployeeInput, {nullable:true})
    department?: DepartmentUpdateOneWithoutEmployeeInput;

    @Field(() => EmailSentUpdateManyWithoutEmployeeInput, {nullable:true})
    EmailSent?: EmailSentUpdateManyWithoutEmployeeInput;

    @Field(() => EmployeeRoleUpdateManyWithoutEmployeeInput, {nullable:true})
    EmployeeRole?: EmployeeRoleUpdateManyWithoutEmployeeInput;
}
