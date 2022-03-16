import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutEmailSentInput } from './employee-create-without-email-sent.input';

@InputType()
export class EmployeeCreateOrConnectWithoutEmailSentInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutEmailSentInput, {nullable:false})
    create!: EmployeeCreateWithoutEmailSentInput;
}
