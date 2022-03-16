import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EmployeeRoleAvgAggregate {

    @Field(() => Float, {nullable:true})
    employeeId?: number;

    @Field(() => Float, {nullable:true})
    roleId?: number;
}
