import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateNestedOneWithoutEmailSentInput } from '../employee/employee-create-nested-one-without-email-sent.input';

@InputType()
export class EmailSentCreateWithoutCustomerInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => EmployeeCreateNestedOneWithoutEmailSentInput, {nullable:false})
    employee!: EmployeeCreateNestedOneWithoutEmailSentInput;
}
