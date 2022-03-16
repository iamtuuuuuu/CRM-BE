import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerCampaignWhereInput } from './customer-campaign-where.input';
import { CustomerCampaignOrderByWithAggregationInput } from './customer-campaign-order-by-with-aggregation.input';
import { CustomerCampaignScalarFieldEnum } from './customer-campaign-scalar-field.enum';
import { CustomerCampaignScalarWhereWithAggregatesInput } from './customer-campaign-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CustomerCampaignCountAggregateInput } from './customer-campaign-count-aggregate.input';
import { CustomerCampaignAvgAggregateInput } from './customer-campaign-avg-aggregate.input';
import { CustomerCampaignSumAggregateInput } from './customer-campaign-sum-aggregate.input';
import { CustomerCampaignMinAggregateInput } from './customer-campaign-min-aggregate.input';
import { CustomerCampaignMaxAggregateInput } from './customer-campaign-max-aggregate.input';

@ArgsType()
export class CustomerCampaignGroupByArgs {

    @Field(() => CustomerCampaignWhereInput, {nullable:true})
    where?: CustomerCampaignWhereInput;

    @Field(() => [CustomerCampaignOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CustomerCampaignOrderByWithAggregationInput>;

    @Field(() => [CustomerCampaignScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CustomerCampaignScalarFieldEnum>;

    @Field(() => CustomerCampaignScalarWhereWithAggregatesInput, {nullable:true})
    having?: CustomerCampaignScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CustomerCampaignCountAggregateInput, {nullable:true})
    _count?: CustomerCampaignCountAggregateInput;

    @Field(() => CustomerCampaignAvgAggregateInput, {nullable:true})
    _avg?: CustomerCampaignAvgAggregateInput;

    @Field(() => CustomerCampaignSumAggregateInput, {nullable:true})
    _sum?: CustomerCampaignSumAggregateInput;

    @Field(() => CustomerCampaignMinAggregateInput, {nullable:true})
    _min?: CustomerCampaignMinAggregateInput;

    @Field(() => CustomerCampaignMaxAggregateInput, {nullable:true})
    _max?: CustomerCampaignMaxAggregateInput;
}
