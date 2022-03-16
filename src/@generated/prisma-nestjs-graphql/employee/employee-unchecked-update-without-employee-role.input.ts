import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EmailSentUncheckedUpdateManyWithoutEmployeeInput } from '../email-sent/email-sent-unchecked-update-many-without-employee.input';
import { ProblemUncheckedUpdateManyWithoutEmployeeInput } from '../problem/problem-unchecked-update-many-without-employee.input';

@InputType()
export class EmployeeUncheckedUpdateWithoutEmployeeRoleInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    departmentId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => EmailSentUncheckedUpdateManyWithoutEmployeeInput, {nullable:true})
    EmailSent?: EmailSentUncheckedUpdateManyWithoutEmployeeInput;

    @Field(() => ProblemUncheckedUpdateManyWithoutEmployeeInput, {nullable:true})
    Problem?: ProblemUncheckedUpdateManyWithoutEmployeeInput;
}
