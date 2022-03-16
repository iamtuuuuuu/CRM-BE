import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentCreateWithoutCustomerInput } from './email-sent-create-without-customer.input';
import { EmailSentCreateOrConnectWithoutCustomerInput } from './email-sent-create-or-connect-without-customer.input';
import { EmailSentCreateManyCustomerInputEnvelope } from './email-sent-create-many-customer-input-envelope.input';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';

@InputType()
export class EmailSentUncheckedCreateNestedManyWithoutCustomerInput {

    @Field(() => [EmailSentCreateWithoutCustomerInput], {nullable:true})
    create?: Array<EmailSentCreateWithoutCustomerInput>;

    @Field(() => [EmailSentCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<EmailSentCreateOrConnectWithoutCustomerInput>;

    @Field(() => EmailSentCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: EmailSentCreateManyCustomerInputEnvelope;

    @Field(() => [EmailSentWhereUniqueInput], {nullable:true})
    connect?: Array<EmailSentWhereUniqueInput>;
}
