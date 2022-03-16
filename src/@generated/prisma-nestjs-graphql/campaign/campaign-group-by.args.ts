import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignWhereInput } from './campaign-where.input';
import { CampaignOrderByWithAggregationInput } from './campaign-order-by-with-aggregation.input';
import { CampaignScalarFieldEnum } from './campaign-scalar-field.enum';
import { CampaignScalarWhereWithAggregatesInput } from './campaign-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CampaignCountAggregateInput } from './campaign-count-aggregate.input';
import { CampaignAvgAggregateInput } from './campaign-avg-aggregate.input';
import { CampaignSumAggregateInput } from './campaign-sum-aggregate.input';
import { CampaignMinAggregateInput } from './campaign-min-aggregate.input';
import { CampaignMaxAggregateInput } from './campaign-max-aggregate.input';

@ArgsType()
export class CampaignGroupByArgs {

    @Field(() => CampaignWhereInput, {nullable:true})
    where?: CampaignWhereInput;

    @Field(() => [CampaignOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CampaignOrderByWithAggregationInput>;

    @Field(() => [CampaignScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CampaignScalarFieldEnum>;

    @Field(() => CampaignScalarWhereWithAggregatesInput, {nullable:true})
    having?: CampaignScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CampaignCountAggregateInput, {nullable:true})
    _count?: CampaignCountAggregateInput;

    @Field(() => CampaignAvgAggregateInput, {nullable:true})
    _avg?: CampaignAvgAggregateInput;

    @Field(() => CampaignSumAggregateInput, {nullable:true})
    _sum?: CampaignSumAggregateInput;

    @Field(() => CampaignMinAggregateInput, {nullable:true})
    _min?: CampaignMinAggregateInput;

    @Field(() => CampaignMaxAggregateInput, {nullable:true})
    _max?: CampaignMaxAggregateInput;
}
