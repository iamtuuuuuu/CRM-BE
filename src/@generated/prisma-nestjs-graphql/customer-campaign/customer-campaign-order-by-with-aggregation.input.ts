import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CustomerCampaignCountOrderByAggregateInput } from './customer-campaign-count-order-by-aggregate.input';
import { CustomerCampaignAvgOrderByAggregateInput } from './customer-campaign-avg-order-by-aggregate.input';
import { CustomerCampaignMaxOrderByAggregateInput } from './customer-campaign-max-order-by-aggregate.input';
import { CustomerCampaignMinOrderByAggregateInput } from './customer-campaign-min-order-by-aggregate.input';
import { CustomerCampaignSumOrderByAggregateInput } from './customer-campaign-sum-order-by-aggregate.input';

@InputType()
export class CustomerCampaignOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    campaignId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    note?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => CustomerCampaignCountOrderByAggregateInput, {nullable:true})
    _count?: CustomerCampaignCountOrderByAggregateInput;

    @Field(() => CustomerCampaignAvgOrderByAggregateInput, {nullable:true})
    _avg?: CustomerCampaignAvgOrderByAggregateInput;

    @Field(() => CustomerCampaignMaxOrderByAggregateInput, {nullable:true})
    _max?: CustomerCampaignMaxOrderByAggregateInput;

    @Field(() => CustomerCampaignMinOrderByAggregateInput, {nullable:true})
    _min?: CustomerCampaignMinOrderByAggregateInput;

    @Field(() => CustomerCampaignSumOrderByAggregateInput, {nullable:true})
    _sum?: CustomerCampaignSumOrderByAggregateInput;
}
