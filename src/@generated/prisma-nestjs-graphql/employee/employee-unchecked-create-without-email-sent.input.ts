import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EmployeeRoleUncheckedCreateNestedManyWithoutEmployeeInput } from '../employee-role/employee-role-unchecked-create-nested-many-without-employee.input';
import { ProblemUncheckedCreateNestedManyWithoutEmployeeInput } from '../problem/problem-unchecked-create-nested-many-without-employee.input';

@InputType()
export class EmployeeUncheckedCreateWithoutEmailSentInput {

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

    @Field(() => EmployeeRoleUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    EmployeeRole?: EmployeeRoleUncheckedCreateNestedManyWithoutEmployeeInput;

    @Field(() => ProblemUncheckedCreateNestedManyWithoutEmployeeInput, {nullable:true})
    Problem?: ProblemUncheckedCreateNestedManyWithoutEmployeeInput;
}
