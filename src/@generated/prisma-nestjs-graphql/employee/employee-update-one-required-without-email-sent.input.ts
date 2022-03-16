import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutEmailSentInput } from './employee-create-without-email-sent.input';
import { EmployeeCreateOrConnectWithoutEmailSentInput } from './employee-create-or-connect-without-email-sent.input';
import { EmployeeUpsertWithoutEmailSentInput } from './employee-upsert-without-email-sent.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutEmailSentInput } from './employee-update-without-email-sent.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutEmailSentInput {

    @Field(() => EmployeeCreateWithoutEmailSentInput, {nullable:true})
    create?: EmployeeCreateWithoutEmailSentInput;

    @Field(() => EmployeeCreateOrConnectWithoutEmailSentInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmailSentInput;

    @Field(() => EmployeeUpsertWithoutEmailSentInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutEmailSentInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutEmailSentInput, {nullable:true})
    update?: EmployeeUpdateWithoutEmailSentInput;
}
