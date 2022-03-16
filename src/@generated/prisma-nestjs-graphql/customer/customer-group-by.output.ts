import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomerCountAggregate } from './customer-count-aggregate.output';
import { CustomerAvgAggregate } from './customer-avg-aggregate.output';
import { CustomerSumAggregate } from './customer-sum-aggregate.output';
import { CustomerMinAggregate } from './customer-min-aggregate.output';
import { CustomerMaxAggregate } from './customer-max-aggregate.output';

@ObjectType()
export class CustomerGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => Date, {nullable:false})
    dob!: Date | string;

    @Field(() => String, {nullable:false})
    gender!: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Int, {nullable:false})
    customerContactId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => CustomerCountAggregate, {nullable:true})
    _count?: CustomerCountAggregate;

    @Field(() => CustomerAvgAggregate, {nullable:true})
    _avg?: CustomerAvgAggregate;

    @Field(() => CustomerSumAggregate, {nullable:true})
    _sum?: CustomerSumAggregate;

    @Field(() => CustomerMinAggregate, {nullable:true})
    _min?: CustomerMinAggregate;

    @Field(() => CustomerMaxAggregate, {nullable:true})
    _max?: CustomerMaxAggregate;
}
