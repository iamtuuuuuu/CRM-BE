import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProblemCountOrderByAggregateInput } from './problem-count-order-by-aggregate.input';
import { ProblemAvgOrderByAggregateInput } from './problem-avg-order-by-aggregate.input';
import { ProblemMaxOrderByAggregateInput } from './problem-max-order-by-aggregate.input';
import { ProblemMinOrderByAggregateInput } from './problem-min-order-by-aggregate.input';
import { ProblemSumOrderByAggregateInput } from './problem-sum-order-by-aggregate.input';

@InputType()
export class ProblemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    note?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => ProblemCountOrderByAggregateInput, {nullable:true})
    _count?: ProblemCountOrderByAggregateInput;

    @Field(() => ProblemAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProblemAvgOrderByAggregateInput;

    @Field(() => ProblemMaxOrderByAggregateInput, {nullable:true})
    _max?: ProblemMaxOrderByAggregateInput;

    @Field(() => ProblemMinOrderByAggregateInput, {nullable:true})
    _min?: ProblemMinOrderByAggregateInput;

    @Field(() => ProblemSumOrderByAggregateInput, {nullable:true})
    _sum?: ProblemSumOrderByAggregateInput;
}
