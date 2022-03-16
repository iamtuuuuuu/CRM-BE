import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignStatusWhereInput } from './campaign-status-where.input';
import { CampaignStatusOrderByWithRelationInput } from './campaign-status-order-by-with-relation.input';
import { CampaignStatusWhereUniqueInput } from './campaign-status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampaignStatusCountAggregateInput } from './campaign-status-count-aggregate.input';
import { CampaignStatusAvgAggregateInput } from './campaign-status-avg-aggregate.input';
import { CampaignStatusSumAggregateInput } from './campaign-status-sum-aggregate.input';
import { CampaignStatusMinAggregateInput } from './campaign-status-min-aggregate.input';
import { CampaignStatusMaxAggregateInput } from './campaign-status-max-aggregate.input';

@ArgsType()
export class CampaignStatusAggregateArgs {

    @Field(() => CampaignStatusWhereInput, {nullable:true})
    where?: CampaignStatusWhereInput;

    @Field(() => [CampaignStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CampaignStatusOrderByWithRelationInput>;

    @Field(() => CampaignStatusWhereUniqueInput, {nullable:true})
    cursor?: CampaignStatusWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CampaignStatusCountAggregateInput, {nullable:true})
    _count?: CampaignStatusCountAggregateInput;

    @Field(() => CampaignStatusAvgAggregateInput, {nullable:true})
    _avg?: CampaignStatusAvgAggregateInput;

    @Field(() => CampaignStatusSumAggregateInput, {nullable:true})
    _sum?: CampaignStatusSumAggregateInput;

    @Field(() => CampaignStatusMinAggregateInput, {nullable:true})
    _min?: CampaignStatusMinAggregateInput;

    @Field(() => CampaignStatusMaxAggregateInput, {nullable:true})
    _max?: CampaignStatusMaxAggregateInput;
}
