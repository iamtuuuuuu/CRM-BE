import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EmployeeRoleCountOrderByAggregateInput } from './employee-role-count-order-by-aggregate.input';
import { EmployeeRoleAvgOrderByAggregateInput } from './employee-role-avg-order-by-aggregate.input';
import { EmployeeRoleMaxOrderByAggregateInput } from './employee-role-max-order-by-aggregate.input';
import { EmployeeRoleMinOrderByAggregateInput } from './employee-role-min-order-by-aggregate.input';
import { EmployeeRoleSumOrderByAggregateInput } from './employee-role-sum-order-by-aggregate.input';

@InputType()
export class EmployeeRoleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => EmployeeRoleCountOrderByAggregateInput, {nullable:true})
    _count?: EmployeeRoleCountOrderByAggregateInput;

    @Field(() => EmployeeRoleAvgOrderByAggregateInput, {nullable:true})
    _avg?: EmployeeRoleAvgOrderByAggregateInput;

    @Field(() => EmployeeRoleMaxOrderByAggregateInput, {nullable:true})
    _max?: EmployeeRoleMaxOrderByAggregateInput;

    @Field(() => EmployeeRoleMinOrderByAggregateInput, {nullable:true})
    _min?: EmployeeRoleMinOrderByAggregateInput;

    @Field(() => EmployeeRoleSumOrderByAggregateInput, {nullable:true})
    _sum?: EmployeeRoleSumOrderByAggregateInput;
}
