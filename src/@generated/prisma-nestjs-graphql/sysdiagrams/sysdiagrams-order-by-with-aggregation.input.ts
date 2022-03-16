import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { sysdiagramsCountOrderByAggregateInput } from './sysdiagrams-count-order-by-aggregate.input';
import { sysdiagramsAvgOrderByAggregateInput } from './sysdiagrams-avg-order-by-aggregate.input';
import { sysdiagramsMaxOrderByAggregateInput } from './sysdiagrams-max-order-by-aggregate.input';
import { sysdiagramsMinOrderByAggregateInput } from './sysdiagrams-min-order-by-aggregate.input';
import { sysdiagramsSumOrderByAggregateInput } from './sysdiagrams-sum-order-by-aggregate.input';

@InputType()
export class sysdiagramsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    principal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    diagram_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    definition?: keyof typeof SortOrder;

    @Field(() => sysdiagramsCountOrderByAggregateInput, {nullable:true})
    _count?: sysdiagramsCountOrderByAggregateInput;

    @Field(() => sysdiagramsAvgOrderByAggregateInput, {nullable:true})
    _avg?: sysdiagramsAvgOrderByAggregateInput;

    @Field(() => sysdiagramsMaxOrderByAggregateInput, {nullable:true})
    _max?: sysdiagramsMaxOrderByAggregateInput;

    @Field(() => sysdiagramsMinOrderByAggregateInput, {nullable:true})
    _min?: sysdiagramsMinOrderByAggregateInput;

    @Field(() => sysdiagramsSumOrderByAggregateInput, {nullable:true})
    _sum?: sysdiagramsSumOrderByAggregateInput;
}
