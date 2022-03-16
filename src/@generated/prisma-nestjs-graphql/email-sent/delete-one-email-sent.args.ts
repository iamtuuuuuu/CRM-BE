import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';

@ArgsType()
export class DeleteOneEmailSentArgs {

    @Field(() => EmailSentWhereUniqueInput, {nullable:false})
    where!: EmailSentWhereUniqueInput;
}
