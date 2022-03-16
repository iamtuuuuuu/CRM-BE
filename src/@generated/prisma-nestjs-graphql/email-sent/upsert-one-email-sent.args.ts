import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmailSentWhereUniqueInput } from './email-sent-where-unique.input';
import { EmailSentCreateInput } from './email-sent-create.input';
import { EmailSentUpdateInput } from './email-sent-update.input';

@ArgsType()
export class UpsertOneEmailSentArgs {

    @Field(() => EmailSentWhereUniqueInput, {nullable:false})
    where!: EmailSentWhereUniqueInput;

    @Field(() => EmailSentCreateInput, {nullable:false})
    create!: EmailSentCreateInput;

    @Field(() => EmailSentUpdateInput, {nullable:false})
    update!: EmailSentUpdateInput;
}
