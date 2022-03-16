import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateNestedOneWithoutEmployeeInput } from '../department/department-create-nested-one-without-employee.input';
import { EmployeeRoleCreateNestedManyWithoutEmployeeInput } from '../employee-role/employee-role-create-nested-many-without-employee.input';
import { ProblemCreateNestedManyWithoutEmployeeInput } from '../problem/problem-create-nested-many-without-employee.input';

@InputType()
export class EmployeeCreateWithoutEmailSentInput {

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

    @Field(() => DepartmentCreateNestedOneWithoutEmployeeInput, {nullable:true})
    department?: DepartmentCreateNestedOneWithoutEmployeeInput;

    @Field(() => EmployeeRoleCreateNestedManyWithoutEmployeeInput, {nullable:true})
    EmployeeRole?: EmployeeRoleCreateNestedManyWithoutEmployeeInput;

    @Field(() => ProblemCreateNestedManyWithoutEmployeeInput, {nullable:true})
    Problem?: ProblemCreateNestedManyWithoutEmployeeInput;
}
