import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomerCampaignCountAggregate } from './customer-campaign-count-aggregate.output';
import { CustomerCampaignAvgAggregate } from './customer-campaign-avg-aggregate.output';
import { CustomerCampaignSumAggregate } from './customer-campaign-sum-aggregate.output';
import { CustomerCampaignMinAggregate } from './customer-campaign-min-aggregate.output';
import { CustomerCampaignMaxAggregate } from './customer-campaign-max-aggregate.output';

@ObjectType()
export class CustomerCampaignGroupBy {

    @Field(() => Int, {nullable:false})
    customerId!: number;

    @Field(() => Int, {nullable:false})
    campaignId!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => CustomerCampaignCountAggregate, {nullable:true})
    _count?: CustomerCampaignCountAggregate;

    @Field(() => CustomerCampaignAvgAggregate, {nullable:true})
    _avg?: CustomerCampaignAvgAggregate;

    @Field(() => CustomerCampaignSumAggregate, {nullable:true})
    _sum?: CustomerCampaignSumAggregate;

    @Field(() => CustomerCampaignMinAggregate, {nullable:true})
    _min?: CustomerCampaignMinAggregate;

    @Field(() => CustomerCampaignMaxAggregate, {nullable:true})
    _max?: CustomerCampaignMaxAggregate;
}
