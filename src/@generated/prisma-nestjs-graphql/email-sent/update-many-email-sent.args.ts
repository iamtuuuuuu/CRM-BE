import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmailSentUpdateManyMutationInput } from './email-sent-update-many-mutation.input';
import { EmailSentWhereInput } from './email-sent-where.input';

@ArgsType()
export class UpdateManyEmailSentArgs {

    @Field(() => EmailSentUpdateManyMutationInput, {nullable:false})
    data!: EmailSentUpdateManyMutationInput;

    @Field(() => EmailSentWhereInput, {nullable:true})
    where?: EmailSentWhereInput;
}
