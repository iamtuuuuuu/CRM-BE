import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentCreateWithoutEmployeeInput } from './email-sent-create-without-employee.input';
import { EmailSentCreateOrConnectWithoutEmployeeInput } from './email-sent-create-or-connect-without-employee.input';
import { EmailSentCreateManyEmployeeInputEnvelope } from './email-sent-create-many-employee-input-envelope.input';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';

@InputType()
export class EmailSentUncheckedCreateNestedManyWithoutEmployeeInput {

    @Field(() => [EmailSentCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<EmailSentCreateWithoutEmployeeInput>;

    @Field(() => [EmailSentCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<EmailSentCreateOrConnectWithoutEmployeeInput>;

    @Field(() => EmailSentCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: EmailSentCreateManyEmployeeInputEnvelope;

    @Field(() => [EmailSentWhereUniqueInput], {nullable:true})
    connect?: Array<EmailSentWhereUniqueInput>;
}
