import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmailSentUpdateInput } from './email-sent-update.input';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';

@ArgsType()
export class UpdateOneEmailSentArgs {

    @Field(() => EmailSentUpdateInput, {nullable:false})
    data!: EmailSentUpdateInput;

    @Field(() => EmailSentWhereUniqueInput, {nullable:false})
    where!: EmailSentWhereUniqueInput;
}
