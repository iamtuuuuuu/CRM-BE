import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';
import { EmailSentUpdateWithoutEmployeeInput } from './email-sent-update-without-employee.input';
import { EmailSentCreateWithoutEmployeeInput } from './email-sent-create-without-employee.input';

@InputType()
export class EmailSentUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => EmailSentWhereUniqueInput, {nullable:false})
    where!: EmailSentWhereUniqueInput;

    @Field(() => EmailSentUpdateWithoutEmployeeInput, {nullable:false})
    update!: EmailSentUpdateWithoutEmployeeInput;

    @Field(() => EmailSentCreateWithoutEmployeeInput, {nullable:false})
    create!: EmailSentCreateWithoutEmployeeInput;
}
