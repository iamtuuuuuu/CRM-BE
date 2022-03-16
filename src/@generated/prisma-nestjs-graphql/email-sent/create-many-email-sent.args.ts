import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmailSentCreateManyInput } from './email-sent-create-many.input';

@ArgsType()
export class CreateManyEmailSentArgs {

    @Field(() => [EmailSentCreateManyInput], {nullable:false})
    data!: Array<EmailSentCreateManyInput>;
}
