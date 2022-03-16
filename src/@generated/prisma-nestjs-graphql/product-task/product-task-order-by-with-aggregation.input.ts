import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductTaskCountOrderByAggregateInput } from './product-task-count-order-by-aggregate.input';
import { ProductTaskAvgOrderByAggregateInput } from './product-task-avg-order-by-aggregate.input';
import { ProductTaskMaxOrderByAggregateInput } from './product-task-max-order-by-aggregate.input';
import { ProductTaskMinOrderByAggregateInput } from './product-task-min-order-by-aggregate.input';
import { ProductTaskSumOrderByAggregateInput } from './product-task-sum-order-by-aggregate.input';

@InputType()
export class ProductTaskOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProductTaskCountOrderByAggregateInput, {nullable:true})
    _count?: ProductTaskCountOrderByAggregateInput;

    @Field(() => ProductTaskAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProductTaskAvgOrderByAggregateInput;

    @Field(() => ProductTaskMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductTaskMaxOrderByAggregateInput;

    @Field(() => ProductTaskMinOrderByAggregateInput, {nullable:true})
    _min?: ProductTaskMinOrderByAggregateInput;

    @Field(() => ProductTaskSumOrderByAggregateInput, {nullable:true})
    _sum?: ProductTaskSumOrderByAggregateInput;
}
