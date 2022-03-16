import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';
import { EmailSentUpdateWithoutCustomerInput } from './email-sent-update-without-customer.input';
import { EmailSentCreateWithoutCustomerInput } from './email-sent-create-without-customer.input';

@InputType()
export class EmailSentUpsertWithWhereUniqueWithoutCustomerInput {

    @Field(() => EmailSentWhereUniqueInput, {nullable:false})
    where!: EmailSentWhereUniqueInput;

    @Field(() => EmailSentUpdateWithoutCustomerInput, {nullable:false})
    update!: EmailSentUpdateWithoutCustomerInput;

    @Field(() => EmailSentCreateWithoutCustomerInput, {nullable:false})
    create!: EmailSentCreateWithoutCustomerInput;
}
