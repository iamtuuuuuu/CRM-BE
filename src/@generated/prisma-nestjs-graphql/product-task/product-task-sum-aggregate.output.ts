import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductTaskSumAggregate {

    @Field(() => Int, {nullable:true})
    productId?: number;

    @Field(() => Int, {nullable:true})
    taskId?: number;
}
