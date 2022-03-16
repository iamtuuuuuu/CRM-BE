import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateNestedOneWithoutEmployeeInput } from '../department/department-create-nested-one-without-employee.input';
import { EmailSentCreateNestedManyWithoutEmployeeInput } from '../email-sent/email-sent-create-nested-many-without-employee.input';
import { ProblemCreateNestedManyWithoutEmployeeInput } from '../problem/problem-create-nested-many-without-employee.input';

@InputType()
export class EmployeeCreateWithoutEmployeeRoleInput {

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

    @Field(() => EmailSentCreateNestedManyWithoutEmployeeInput, {nullable:true})
    EmailSent?: EmailSentCreateNestedManyWithoutEmployeeInput;

    @Field(() => ProblemCreateNestedManyWithoutEmployeeInput, {nullable:true})
    Problem?: ProblemCreateNestedManyWithoutEmployeeInput;
}
