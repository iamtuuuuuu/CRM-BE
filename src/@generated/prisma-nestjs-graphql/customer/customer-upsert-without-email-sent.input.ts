import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerUpdateWithoutEmailSentInput } from './customer-update-without-email-sent.input';
import { CustomerCreateWithoutEmailSentInput } from './customer-create-without-email-sent.input';

@InputType()
export class CustomerUpsertWithoutEmailSentInput {

    @Field(() => CustomerUpdateWithoutEmailSentInput, {nullable:false})
    update!: CustomerUpdateWithoutEmailSentInput;

    @Field(() => CustomerCreateWithoutEmailSentInput, {nullable:false})
    create!: CustomerCreateWithoutEmailSentInput;
}
