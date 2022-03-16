import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateNestedOneWithoutEmailSentInput } from '../customer/customer-create-nested-one-without-email-sent.input';

@InputType()
export class EmailSentCreateWithoutEmployeeInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => CustomerCreateNestedOneWithoutEmailSentInput, {nullable:false})
    customer!: CustomerCreateNestedOneWithoutEmailSentInput;
}
