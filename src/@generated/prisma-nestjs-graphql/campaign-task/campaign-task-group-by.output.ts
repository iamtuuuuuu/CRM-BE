import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CampaignTaskCountAggregate } from './campaign-task-count-aggregate.output';
import { CampaignTaskAvgAggregate } from './campaign-task-avg-aggregate.output';
import { CampaignTaskSumAggregate } from './campaign-task-sum-aggregate.output';
import { CampaignTaskMinAggregate } from './campaign-task-min-aggregate.output';
import { CampaignTaskMaxAggregate } from './campaign-task-max-aggregate.output';

@ObjectType()
export class CampaignTaskGroupBy {

    @Field(() => Int, {nullable:false})
    campaignId!: number;

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    isDone!: boolean;

    @Field(() => CampaignTaskCountAggregate, {nullable:true})
    _count?: CampaignTaskCountAggregate;

    @Field(() => CampaignTaskAvgAggregate, {nullable:true})
    _avg?: CampaignTaskAvgAggregate;

    @Field(() => CampaignTaskSumAggregate, {nullable:true})
    _sum?: CampaignTaskSumAggregate;

    @Field(() => CampaignTaskMinAggregate, {nullable:true})
    _min?: CampaignTaskMinAggregate;

    @Field(() => CampaignTaskMaxAggregate, {nullable:true})
    _max?: CampaignTaskMaxAggregate;
}
