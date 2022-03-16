import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutEmailSentInput } from './customer-create-without-email-sent.input';
import { CustomerCreateOrConnectWithoutEmailSentInput } from './customer-create-or-connect-without-email-sent.input';
import { CustomerUpsertWithoutEmailSentInput } from './customer-upsert-without-email-sent.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithoutEmailSentInput } from './customer-update-without-email-sent.input';

@InputType()
export class CustomerUpdateOneRequiredWithoutEmailSentInput {

    @Field(() => CustomerCreateWithoutEmailSentInput, {nullable:true})
    create?: CustomerCreateWithoutEmailSentInput;

    @Field(() => CustomerCreateOrConnectWithoutEmailSentInput, {nullable:true})
    connectOrCreate?: CustomerCreateOrConnectWithoutEmailSentInput;

    @Field(() => CustomerUpsertWithoutEmailSentInput, {nullable:true})
    upsert?: CustomerUpsertWithoutEmailSentInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    connect?: CustomerWhereUniqueInput;

    @Field(() => CustomerUpdateWithoutEmailSentInput, {nullable:true})
    update?: CustomerUpdateWithoutEmailSentInput;
}
