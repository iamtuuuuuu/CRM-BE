import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EmailSentUncheckedCreateNestedManyWithoutEmployeeInput } from '../email-sent/email-sent-unchecked-create-nested-many-without-employee.input';
import { ProblemUncheckedCreateNestedManyWithoutEmployeeInput } from '../problem/problem-unchecked-create-nested-many-without-employee.input';

@InputType()
export class EmployeeUncheckedCreateWithoutEmployeeRoleInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Int, {nullable:true})
    departmentId?: number;

    @Field(() => EmailSentUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    EmailSent?: EmailSentUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => ProblemUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    Problem?: ProblemUncheckedCreateNestedManyWithoutEmployeeInput;
}
