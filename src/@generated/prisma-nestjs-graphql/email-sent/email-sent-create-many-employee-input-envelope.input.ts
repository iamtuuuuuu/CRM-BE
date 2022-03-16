import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentCreateManyEmployeeInput } from './email-sent-create-many-employee.input';

@InputType()
export class EmailSentCreateManyEmployeeInputEnvelope {

    @Field(() => [EmailSentCreateManyEmployeeInput], {nullable:false})
    data!: Array<EmailSentCreateManyEmployeeInput>;
}
