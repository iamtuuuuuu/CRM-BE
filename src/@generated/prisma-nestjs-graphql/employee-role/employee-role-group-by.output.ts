import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EmployeeRoleCountAggregate } from './employee-role-count-aggregate.output';
import { EmployeeRoleAvgAggregate } from './employee-role-avg-aggregate.output';
import { EmployeeRoleSumAggregate } from './employee-role-sum-aggregate.output';
import { EmployeeRoleMinAggregate } from './employee-role-min-aggregate.output';
import { EmployeeRoleMaxAggregate } from './employee-role-max-aggregate.output';

@ObjectType()
export class EmployeeRoleGroupBy {

    @Field(() => Int, {nullable:false})
    employeeId!: number;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => EmployeeRoleCountAggregate, {nullable:true})
    _count?: EmployeeRoleCountAggregate;

    @Field(() => EmployeeRoleAvgAggregate, {nullable:true})
    _avg?: EmployeeRoleAvgAggregate;

    @Field(() => EmployeeRoleSumAggregate, {nullable:true})
    _sum?: EmployeeRoleSumAggregate;

    @Field(() => EmployeeRoleMinAggregate, {nullable:true})
    _min?: EmployeeRoleMinAggregate;

    @Field(() => EmployeeRoleMaxAggregate, {nullable:true})
    _max?: EmployeeRoleMaxAggregate;
}
