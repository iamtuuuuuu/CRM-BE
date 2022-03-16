import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';
import { EmailSentUpdateWithoutEmployeeInput } from './email-sent-update-without-employee.input';

@InputType()
export class EmailSentUpdateWithWhereUniqueWithoutEmployeeInput {

    @Field(() => EmailSentWhereUniqueInput, {nullable:false})
    where!: EmailSentWhereUniqueInput;

    @Field(() => EmailSentUpdateWithoutEmployeeInput, {nullable:false})
    data!: EmailSentUpdateWithoutEmployeeInput;
}
