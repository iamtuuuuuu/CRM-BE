import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';
import { EmailSentUpdateWithoutCustomerInput } from './email-sent-update-without-customer.input';

@InputType()
export class EmailSentUpdateWithWhereUniqueWithoutCustomerInput {

    @Field(() => EmailSentWhereUniqueInput, {nullable:false})
    where!: EmailSentWhereUniqueInput;

    @Field(() => EmailSentUpdateWithoutCustomerInput, {nullable:false})
    data!: EmailSentUpdateWithoutCustomerInput;
}
