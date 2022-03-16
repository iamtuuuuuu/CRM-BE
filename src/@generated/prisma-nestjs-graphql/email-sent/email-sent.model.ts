import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Customer } from '../customer/customer.model';
import { Employee } from '../employee/employee.model';

@ObjectType()
export class EmailSent {

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    customerId!: number;

    @Field(() => Int, {nullable:false})
    employeeId!: number;

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Customer, {nullable:false})
    customer?: Customer;

    @Field(() => Employee, {nullable:false})
    employee?: Employee;
}
