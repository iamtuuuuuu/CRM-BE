import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Department } from '../department/department.model';
import { EmailSent } from '../email-sent/email-sent.model';
import { EmployeeRole } from '../employee-role/employee-role.model';
import { Problem } from '../problem/problem.model';
import { EmployeeCount } from './employee-count.output';

@ObjectType()
export class Employee {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true,defaultValue:'active'})
    status!: string | null;

    @Field(() => Int, {nullable:true})
    departmentId!: number | null;

    @Field(() => Department, {nullable:true})
    department?: Department | null;

    @Field(() => [EmailSent], {nullable:true})
    EmailSent?: Array<EmailSent>;

    @Field(() => [EmployeeRole], {nullable:true})
    EmployeeRole?: Array<EmployeeRole>;

    @Field(() => [Problem], {nullable:true})
    Problem?: Array<Problem>;

    @Field(() => EmployeeCount, {nullable:false})
    _count?: EmployeeCount;
}
