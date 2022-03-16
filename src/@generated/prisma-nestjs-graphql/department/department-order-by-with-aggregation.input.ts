import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DepartmentCountOrderByAggregateInput } from './department-count-order-by-aggregate.input';
import { DepartmentAvgOrderByAggregateInput } from './department-avg-order-by-aggregate.input';
import { DepartmentMaxOrderByAggregateInput } from './department-max-order-by-aggregate.input';
import { DepartmentMinOrderByAggregateInput } from './department-min-order-by-aggregate.input';
import { DepartmentSumOrderByAggregateInput } from './department-sum-order-by-aggregate.input';

@InputType()
export class DepartmentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => DepartmentCountOrderByAggregateInput, {nullable:true})
    _count?: DepartmentCountOrderByAggregateInput;

    @Field(() => DepartmentAvgOrderByAggregateInput, {nullable:true})
    _avg?: DepartmentAvgOrderByAggregateInput;

    @Field(() => DepartmentMaxOrderByAggregateInput, {nullable:true})
    _max?: DepartmentMaxOrderByAggregateInput;

    @Field(() => DepartmentMinOrderByAggregateInput, {nullable:true})
    _min?: DepartmentMinOrderByAggregateInput;

    @Field(() => DepartmentSumOrderByAggregateInput, {nullable:true})
    _sum?: DepartmentSumOrderByAggregateInput;
}
