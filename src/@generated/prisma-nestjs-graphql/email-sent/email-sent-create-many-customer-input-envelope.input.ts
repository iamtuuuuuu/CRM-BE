import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentCreateManyCustomerInput } from './email-sent-create-many-customer.input';

@InputType()
export class EmailSentCreateManyCustomerInputEnvelope {

    @Field(() => [EmailSentCreateManyCustomerInput], {nullable:false})
    data!: Array<EmailSentCreateManyCustomerInput>;
}
