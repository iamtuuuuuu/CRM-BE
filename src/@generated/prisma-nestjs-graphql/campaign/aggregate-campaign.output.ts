import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampaignCountAggregate } from './campaign-count-aggregate.output';
import { CampaignAvgAggregate } from './campaign-avg-aggregate.output';
import { CampaignSumAggregate } from './campaign-sum-aggregate.output';
import { CampaignMinAggregate } from './campaign-min-aggregate.output';
import { CampaignMaxAggregate } from './campaign-max-aggregate.output';

@ObjectType()
export class AggregateCampaign {

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
