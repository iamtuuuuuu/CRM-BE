import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EmployeeCountOrderByAggregateInput } from './employee-count-order-by-aggregate.input';
import { EmployeeAvgOrderByAggregateInput } from './employee-avg-order-by-aggregate.input';
import { EmployeeMaxOrderByAggregateInput } from './employee-max-order-by-aggregate.input';
import { EmployeeMinOrderByAggregateInput } from './employee-min-order-by-aggregate.input';
import { EmployeeSumOrderByAggregateInput } from './employee-sum-order-by-aggregate.input';

@InputType()
export class EmployeeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    departmentId?: keyof typeof SortOrder;

    @Field(() => EmployeeCountOrderByAggregateInput, {nullable:true})
    _count?: EmployeeCountOrderByAggregateInput;

    @Field(() => EmployeeAvgOrderByAggregateInput, {nullable:true})
    _avg?: EmployeeAvgOrderByAggregateInput;

    @Field(() => EmployeeMaxOrderByAggregateInput, {nullable:true})
    _max?: EmployeeMaxOrderByAggregateInput;

    @Field(() => EmployeeMinOrderByAggregateInput, {nullable:true})
    _min?: EmployeeMinOrderByAggregateInput;

    @Field(() => EmployeeSumOrderByAggregateInput, {nullable:true})
    _sum?: EmployeeSumOrderByAggregateInput;
}
