import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeeRoleSumAggregate {

    @Field(() => Int, {nullable:true})
    employeeId?: number;

    @Field(() => Int, {nullable:true})
    roleId?: number;
}
