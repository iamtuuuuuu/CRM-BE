import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomerContactCountAggregate } from './customer-contact-count-aggregate.output';
import { CustomerContactAvgAggregate } from './customer-contact-avg-aggregate.output';
import { CustomerContactSumAggregate } from './customer-contact-sum-aggregate.output';
import { CustomerContactMinAggregate } from './customer-contact-min-aggregate.output';
import { CustomerContactMaxAggregate } from './customer-contact-max-aggregate.output';

@ObjectType()
export class CustomerContactGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    ref?: string;

    @Field(() => CustomerContactCountAggregate, {nullable:true})
    _count?: CustomerContactCountAggregate;

    @Field(() => CustomerContactAvgAggregate, {nullable:true})
    _avg?: CustomerContactAvgAggregate;

    @Field(() => CustomerContactSumAggregate, {nullable:true})
    _sum?: CustomerContactSumAggregate;

    @Field(() => CustomerContactMinAggregate, {nullable:true})
    _min?: CustomerContactMinAggregate;

    @Field(() => CustomerContactMaxAggregate, {nullable:true})
    _max?: CustomerContactMaxAggregate;
}
