import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutEmailSentInput } from './customer-create-without-email-sent.input';
import { CustomerCreateOrConnectWithoutEmailSentInput } from './customer-create-or-connect-without-email-sent.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedOneWithoutEmailSentInput {

    @Field(() => CustomerCreateWithoutEmailSentInput, {nullable:true})
    create?: CustomerCreateWithoutEmailSentInput;

    @Field(() => CustomerCreateOrConnectWithoutEmailSentInput, {nullable:true})
    connectOrCreate?: CustomerCreateOrConnectWithoutEmailSentInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    connect?: CustomerWhereUniqueInput;
}
