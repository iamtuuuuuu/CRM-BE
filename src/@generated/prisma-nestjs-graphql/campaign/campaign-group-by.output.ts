import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CampaignCountAggregate } from './campaign-count-aggregate.output';
import { CampaignAvgAggregate } from './campaign-avg-aggregate.output';
import { CampaignSumAggregate } from './campaign-sum-aggregate.output';
import { CampaignMinAggregate } from './campaign-min-aggregate.output';
import { CampaignMaxAggregate } from './campaign-max-aggregate.output';

@ObjectType()
export class CampaignGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    campaignStatusId!: number;

    @Field(() => String, {nullable:true})
    linkImg?: string;

    @Field(() => CampaignCountAggregate, {nullable:true})
    _count?: CampaignCountAggregate;

    @Field(() => CampaignAvgAggregate, {nullable:true})
    _avg?: CampaignAvgAggregate;

    @Field(() => CampaignSumAggregate, {nullable:true})
    _sum?: CampaignSumAggregate;

    @Field(() => CampaignMinAggregate, {nullable:true})
    _min?: CampaignMinAggregate;

    @Field(() => CampaignMaxAggregate, {nullable:true})
    _max?: CampaignMaxAggregate;
}
