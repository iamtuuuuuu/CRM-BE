import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentCreateWithoutEmployeeInput } from './email-sent-create-without-employee.input';
import { EmailSentCreateOrConnectWithoutEmployeeInput } from './email-sent-create-or-connect-without-employee.input';
import { EmailSentUpsertWithWhereUniqueWithoutEmployeeInput } from './email-sent-upsert-with-where-unique-without-employee.input';
import { EmailSentCreateManyEmployeeInputEnvelope } from './email-sent-create-many-employee-input-envelope.input';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';
import { EmailSentUpdateWithWhereUniqueWithoutEmployeeInput } from './email-sent-update-with-where-unique-without-employee.input';
import { EmailSentUpdateManyWithWhereWithoutEmployeeInput } from './email-sent-update-many-with-where-without-employee.input';
import { EmailSentScalarWhereInput } from './email-sent-scalar-where.input';

@InputType()
export class EmailSentUncheckedUpdateManyWithoutEmployeeInput {

    @Field(() => [EmailSentCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<EmailSentCreateWithoutEmployeeInput>;

    @Field(() => [EmailSentCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<EmailSentCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [EmailSentUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    upsert?: Array<EmailSentUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => EmailSentCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: EmailSentCreateManyEmployeeInputEnvelope;

    @Field(() => [EmailSentWhereUniqueInput], {nullable:true})
    set?: Array<EmailSentWhereUniqueInput>;

    @Field(() => [EmailSentWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmailSentWhereUniqueInput>;

    @Field(() => [EmailSentWhereUniqueInput], {nullable:true})
    delete?: Array<EmailSentWhereUniqueInput>;

    @Field(() => [EmailSentWhereUniqueInput], {nullable:true})
    connect?: Array<EmailSentWhereUniqueInput>;

    @Field(() => [EmailSentUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    update?: Array<EmailSentUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [EmailSentUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    updateMany?: Array<EmailSentUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [EmailSentScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmailSentScalarWhereInput>;
}
