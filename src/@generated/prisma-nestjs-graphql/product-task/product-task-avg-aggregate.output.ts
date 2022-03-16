import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ProductTaskAvgAggregate {

    @Field(() => Float, {nullable:true})
    productId?: number;

    @Field(() => Float, {nullable:true})
    taskId?: number;
}
