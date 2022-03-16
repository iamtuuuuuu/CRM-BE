import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutEmailSentInput } from './employee-create-without-email-sent.input';
import { EmployeeCreateOrConnectWithoutEmailSentInput } from './employee-create-or-connect-without-email-sent.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutEmailSentInput {

    @Field(() => EmployeeCreateWithoutEmailSentInput, {nullable:true})
    create?: EmployeeCreateWithoutEmailSentInput;

    @Field(() => EmployeeCreateOrConnectWithoutEmailSentInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmailSentInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
