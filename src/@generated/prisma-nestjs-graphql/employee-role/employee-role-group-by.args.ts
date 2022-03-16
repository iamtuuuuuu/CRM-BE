import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeRoleWhereInput } from './employee-role-where.input';
import { EmployeeRoleOrderByWithAggregationInput } from './employee-role-order-by-with-aggregation.input';
import { EmployeeRoleScalarFieldEnum } from './employee-role-scalar-field.enum';
import { EmployeeRoleScalarWhereWithAggregatesInput } from './employee-role-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EmployeeRoleCountAggregateInput } from './employee-role-count-aggregate.input';
import { EmployeeRoleAvgAggregateInput } from './employee-role-avg-aggregate.input';
import { EmployeeRoleSumAggregateInput } from './employee-role-sum-aggregate.input';
import { EmployeeRoleMinAggregateInput } from './employee-role-min-aggregate.input';
import { EmployeeRoleMaxAggregateInput } from './employee-role-max-aggregate.input';

@ArgsType()
export class EmployeeRoleGroupByArgs {

    @Field(() => EmployeeRoleWhereInput, {nullable:true})
    where?: EmployeeRoleWhereInput;

    @Field(() => [EmployeeRoleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EmployeeRoleOrderByWithAggregationInput>;

    @Field(() => [EmployeeRoleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmployeeRoleScalarFieldEnum>;

    @Field(() => EmployeeRoleScalarWhereWithAggregatesInput, {nullable:true})
    having?: EmployeeRoleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EmployeeRoleCountAggregateInput, {nullable:true})
    _count?: EmployeeRoleCountAggregateInput;

    @Field(() => EmployeeRoleAvgAggregateInput, {nullable:true})
    _avg?: EmployeeRoleAvgAggregateInput;

    @Field(() => EmployeeRoleSumAggregateInput, {nullable:true})
    _sum?: EmployeeRoleSumAggregateInput;

    @Field(() => EmployeeRoleMinAggregateInput, {nullable:true})
    _min?: EmployeeRoleMinAggregateInput;

    @Field(() => EmployeeRoleMaxAggregateInput, {nullable:true})
    _max?: EmployeeRoleMaxAggregateInput;
}
