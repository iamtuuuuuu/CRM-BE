import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CampaignStatusCountAggregate } from './campaign-status-count-aggregate.output';
import { CampaignStatusAvgAggregate } from './campaign-status-avg-aggregate.output';
import { CampaignStatusSumAggregate } from './campaign-status-sum-aggregate.output';
import { CampaignStatusMinAggregate } from './campaign-status-min-aggregate.output';
import { CampaignStatusMaxAggregate } from './campaign-status-max-aggregate.output';

@ObjectType()
export class CampaignStatusGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => CampaignStatusCountAggregate, {nullable:true})
    _count?: CampaignStatusCountAggregate;

    @Field(() => CampaignStatusAvgAggregate, {nullable:true})
    _avg?: CampaignStatusAvgAggregate;

    @Field(() => CampaignStatusSumAggregate, {nullable:true})
    _sum?: CampaignStatusSumAggregate;

    @Field(() => CampaignStatusMinAggregate, {nullable:true})
    _min?: CampaignStatusMinAggregate;

    @Field(() => CampaignStatusMaxAggregate, {nullable:true})
    _max?: CampaignStatusMaxAggregate;
}
