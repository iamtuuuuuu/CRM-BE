import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerCreateWithoutEmailSentInput } from './customer-create-without-email-sent.input';

@InputType()
export class CustomerCreateOrConnectWithoutEmailSentInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerCreateWithoutEmailSentInput, {nullable:false})
    create!: CustomerCreateWithoutEmailSentInput;
}
