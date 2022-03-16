import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProblemCountAggregate } from './problem-count-aggregate.output';
import { ProblemAvgAggregate } from './problem-avg-aggregate.output';
import { ProblemSumAggregate } from './problem-sum-aggregate.output';
import { ProblemMinAggregate } from './problem-min-aggregate.output';
import { ProblemMaxAggregate } from './problem-max-aggregate.output';

@ObjectType()
export class ProblemGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Int, {nullable:false})
    customerId!: number;

    @Field(() => Int, {nullable:false})
    employeeId!: number;

    @Field(() => ProblemCountAggregate, {nullable:true})
    _count?: ProblemCountAggregate;

    @Field(() => ProblemAvgAggregate, {nullable:true})
    _avg?: ProblemAvgAggregate;

    @Field(() => ProblemSumAggregate, {nullable:true})
    _sum?: ProblemSumAggregate;

    @Field(() => ProblemMinAggregate, {nullable:true})
    _min?: ProblemMinAggregate;

    @Field(() => ProblemMaxAggregate, {nullable:true})
    _max?: ProblemMaxAggregate;
}
