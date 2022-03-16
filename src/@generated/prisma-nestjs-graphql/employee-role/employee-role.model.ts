import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Employee } from '../employee/employee.model';
import { Role } from '../role/role.model';

@ObjectType()
export class EmployeeRole {

    @Field(() => Int, {nullable:false})
    employeeId!: number;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Employee, {nullable:false})
    employee?: Employee;

    @Field(() => Role, {nullable:false})
    role?: Role;
}
