import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductTaskCountAggregate } from './product-task-count-aggregate.output';
import { ProductTaskAvgAggregate } from './product-task-avg-aggregate.output';
import { ProductTaskSumAggregate } from './product-task-sum-aggregate.output';
import { ProductTaskMinAggregate } from './product-task-min-aggregate.output';
import { ProductTaskMaxAggregate } from './product-task-max-aggregate.output';

@ObjectType()
export class ProductTaskGroupBy {

    @Field(() => Int, {nullable:false})
    productId!: number;

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ProductTaskCountAggregate, {nullable:true})
    _count?: ProductTaskCountAggregate;

    @Field(() => ProductTaskAvgAggregate, {nullable:true})
    _avg?: ProductTaskAvgAggregate;

    @Field(() => ProductTaskSumAggregate, {nullable:true})
    _sum?: ProductTaskSumAggregate;

    @Field(() => ProductTaskMinAggregate, {nullable:true})
    _min?: ProductTaskMinAggregate;

    @Field(() => ProductTaskMaxAggregate, {nullable:true})
    _max?: ProductTaskMaxAggregate;
}
