import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EmployeeUpdateOneRequiredWithoutEmailSentInput } from '../employee/employee-update-one-required-without-email-sent.input';

@InputType()
export class EmailSentUpdateWithoutCustomerInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => EmployeeUpdateOneRequiredWithoutEmailSentInput, {nullable:true})
    employee?: EmployeeUpdateOneRequiredWithoutEmailSentInput;
}
