import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentScalarWhereInput } from './email-sent-scalar-where.input';
import { EmailSentUpdateManyMutationInput } from './email-sent-update-many-mutation.input';

@InputType()
export class EmailSentUpdateManyWithWhereWithoutCustomerInput {

    @Field(() => EmailSentScalarWhereInput, {nullable:false})
    where!: EmailSentScalarWhereInput;

    @Field(() => EmailSentUpdateManyMutationInput, {nullable:false})
    data!: EmailSentUpdateManyMutationInput;
}
