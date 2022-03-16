import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SysdiagramsCountAggregate } from './sysdiagrams-count-aggregate.output';
import { SysdiagramsAvgAggregate } from './sysdiagrams-avg-aggregate.output';
import { SysdiagramsSumAggregate } from './sysdiagrams-sum-aggregate.output';
import { SysdiagramsMinAggregate } from './sysdiagrams-min-aggregate.output';
import { SysdiagramsMaxAggregate } from './sysdiagrams-max-aggregate.output';

@ObjectType()
export class SysdiagramsGroupBy {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    principal_id!: number;

    @Field(() => Int, {nullable:false})
    diagram_id!: number;

    @Field(() => Int, {nullable:true})
    version?: number;

    @Field(() => String, {nullable:true})
    definition?: Buffer;

    @Field(() => SysdiagramsCountAggregate, {nullable:true})
    _count?: SysdiagramsCountAggregate;

    @Field(() => SysdiagramsAvgAggregate, {nullable:true})
    _avg?: SysdiagramsAvgAggregate;

    @Field(() => SysdiagramsSumAggregate, {nullable:true})
    _sum?: SysdiagramsSumAggregate;

    @Field(() => SysdiagramsMinAggregate, {nullable:true})
    _min?: SysdiagramsMinAggregate;

    @Field(() => SysdiagramsMaxAggregate, {nullable:true})
    _max?: SysdiagramsMaxAggregate;
}
