import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmailSentCreateInput } from './email-sent-create.input';

@ArgsType()
export class CreateOneEmailSentArgs {

    @Field(() => EmailSentCreateInput, {nullable:false})
    data!: EmailSentCreateInput;
}
