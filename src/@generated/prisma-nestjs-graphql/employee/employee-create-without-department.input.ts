import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmailSentCreateNestedManyWithoutEmployeeInput } from '../email-sent/email-sent-create-nested-many-without-employee.input';
import { EmployeeRoleCreateNestedManyWithoutEmployeeInput } from '../employee-role/employee-role-create-nested-many-without-employee.input';
import { ProblemCreateNestedManyWithoutEmployeeInput } from '../problem/problem-create-nested-many-without-employee.input';

@InputType()
export class EmployeeCreateWithoutDepartmentInput {

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

    @Field(() => EmailSentCreateNestedManyWithoutEmployeeInput, {nullable:true})
    EmailSent?: EmailSentCreateNestedManyWithoutEmployeeInput;

    @Field(() => EmployeeRoleCreateNestedManyWithoutEmployeeInput, {nullable:true})
    EmployeeRole?: EmployeeRoleCreateNestedManyWithoutEmployeeInput;

    @Field(() => ProblemCreateNestedManyWithoutEmployeeInput, {nullable:true})
    Problem?: ProblemCreateNestedManyWithoutEmployeeInput;
}
