import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentCreateWithoutCustomerInput } from './email-sent-create-without-customer.input';
import { EmailSentCreateOrConnectWithoutCustomerInput } from './email-sent-create-or-connect-without-customer.input';
import { EmailSentUpsertWithWhereUniqueWithoutCustomerInput } from './email-sent-upsert-with-where-unique-without-customer.input';
import { EmailSentCreateManyCustomerInputEnvelope } from './email-sent-create-many-customer-input-envelope.input';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';
import { EmailSentUpdateWithWhereUniqueWithoutCustomerInput } from './email-sent-update-with-where-unique-without-customer.input';
import { EmailSentUpdateManyWithWhereWithoutCustomerInput } from './email-sent-update-many-with-where-without-customer.input';
import { EmailSentScalarWhereInput } from './email-sent-scalar-where.input';

@InputType()
export class EmailSentUncheckedUpdateManyWithoutCustomerInput {

    @Field(() => [EmailSentCreateWithoutCustomerInput], {nullable:true})
    create?: Array<EmailSentCreateWithoutCustomerInput>;

    @Field(() => [EmailSentCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<EmailSentCreateOrConnectWithoutCustomerInput>;

    @Field(() => [EmailSentUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    upsert?: Array<EmailSentUpsertWithWhereUniqueWithoutCustomerInput>;

    @Field(() => EmailSentCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: EmailSentCreateManyCustomerInputEnvelope;

    @Field(() => [EmailSentWhereUniqueInput], {nullable:true})
    set?: Array<EmailSentWhereUniqueInput>;

    @Field(() => [EmailSentWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmailSentWhereUniqueInput>;

    @Field(() => [EmailSentWhereUniqueInput], {nullable:true})
    delete?: Array<EmailSentWhereUniqueInput>;

    @Field(() => [EmailSentWhereUniqueInput], {nullable:true})
    connect?: Array<EmailSentWhereUniqueInput>;

    @Field(() => [EmailSentUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    update?: Array<EmailSentUpdateWithWhereUniqueWithoutCustomerInput>;

    @Field(() => [EmailSentUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    updateMany?: Array<EmailSentUpdateManyWithWhereWithoutCustomerInput>;

    @Field(() => [EmailSentScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmailSentScalarWhereInput>;
}
