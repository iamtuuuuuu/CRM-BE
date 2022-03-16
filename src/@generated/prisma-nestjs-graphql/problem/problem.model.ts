import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Customer } from '../customer/customer.model';
import { Employee } from '../employee/employee.model';

@ObjectType()
export class Problem {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    note!: string | null;

    @Field(() => Int, {nullable:false})
    customerId!: number;

    @Field(() => Int, {nullable:false})
    employeeId!: number;

    @Field(() => Customer, {nullable:false})
    customer?: Customer;

    @Field(() => Employee, {nullable:false})
    employee?: Employee;
}
