import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';
import { EmailSentCreateWithoutEmployeeInput } from './email-sent-create-without-employee.input';

@InputType()
export class EmailSentCreateOrConnectWithoutEmployeeInput {

    @Field(() => EmailSentWhereUniqueInput, {nullable:false})
    where!: EmailSentWhereUniqueInput;

    @Field(() => EmailSentCreateWithoutEmployeeInput, {nullable:false})
    create!: EmailSentCreateWithoutEmployeeInput;
}
