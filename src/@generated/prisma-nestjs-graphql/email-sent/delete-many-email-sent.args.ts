import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmailSentWhereInput } from './email-sent-where.input';

@ArgsType()
export class DeleteManyEmailSentArgs {

    @Field(() => EmailSentWhereInput, {nullable:true})
    where?: EmailSentWhereInput;
}
