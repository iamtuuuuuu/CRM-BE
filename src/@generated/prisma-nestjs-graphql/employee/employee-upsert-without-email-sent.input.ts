import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutEmailSentInput } from './employee-update-without-email-sent.input';
import { EmployeeCreateWithoutEmailSentInput } from './employee-create-without-email-sent.input';

@InputType()
export class EmployeeUpsertWithoutEmailSentInput {

    @Field(() => EmployeeUpdateWithoutEmailSentInput, {nullable:false})
    update!: EmployeeUpdateWithoutEmailSentInput;

    @Field(() => EmployeeCreateWithoutEmailSentInput, {nullable:false})
    create!: EmployeeCreateWithoutEmailSentInput;
}
