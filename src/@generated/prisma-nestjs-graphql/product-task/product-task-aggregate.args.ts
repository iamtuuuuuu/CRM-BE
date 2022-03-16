import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTaskWhereInput } from './product-task-where.input';
import { ProductTaskOrderByWithRelationInput } from './product-task-order-by-with-relation.input';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductTaskCountAggregateInput } from './product-task-count-aggregate.input';
import { ProductTaskAvgAggregateInput } from './product-task-avg-aggregate.input';
import { ProductTaskSumAggregateInput } from './product-task-sum-aggregate.input';
import { ProductTaskMinAggregateInput } from './product-task-min-aggregate.input';
import { ProductTaskMaxAggregateInput } from './product-task-max-aggregate.input';

@ArgsType()
export class ProductTaskAggregateArgs {

    @Field(() => ProductTaskWhereInput, {nullable:true})
    where?: ProductTaskWhereInput;

    @Field(() => [ProductTaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductTaskOrderByWithRelationInput>;

    @Field(() => ProductTaskWhereUniqueInput, {nullable:true})
    cursor?: ProductTaskWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductTaskCountAggregateInput, {nullable:true})
    _count?: ProductTaskCountAggregateInput;

    @Field(() => ProductTaskAvgAggregateInput, {nullable:true})
    _avg?: ProductTaskAvgAggregateInput;

    @Field(() => ProductTaskSumAggregateInput, {nullable:true})
    _sum?: ProductTaskSumAggregateInput;

    @Field(() => ProductTaskMinAggregateInput, {nullable:true})
    _min?: ProductTaskMinAggregateInput;

    @Field(() => ProductTaskMaxAggregateInput, {nullable:true})
    _max?: ProductTaskMaxAggregateInput;
}
