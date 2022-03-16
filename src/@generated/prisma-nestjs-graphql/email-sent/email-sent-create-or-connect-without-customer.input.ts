import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';
import { EmailSentCreateWithoutCustomerInput } from './email-sent-create-without-customer.input';

@InputType()
export class EmailSentCreateOrConnectWithoutCustomerInput {

    @Field(() => EmailSentWhereUniqueInput, {nullable:false})
    where!: EmailSentWhereUniqueInput;

    @Field(() => EmailSentCreateWithoutCustomerInput, {nullable:false})
    create!: EmailSentCreateWithoutCustomerInput;
}
