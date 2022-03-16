import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampaignCountOrderByAggregateInput } from './campaign-count-order-by-aggregate.input';
import { CampaignAvgOrderByAggregateInput } from './campaign-avg-order-by-aggregate.input';
import { CampaignMaxOrderByAggregateInput } from './campaign-max-order-by-aggregate.input';
import { CampaignMinOrderByAggregateInput } from './campaign-min-order-by-aggregate.input';
import { CampaignSumOrderByAggregateInput } from './campaign-sum-order-by-aggregate.input';

@InputType()
export class CampaignOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    campaignStatusId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    linkImg?: keyof typeof SortOrder;

    @Field(() => CampaignCountOrderByAggregateInput, {nullable:true})
    _count?: CampaignCountOrderByAggregateInput;

    @Field(() => CampaignAvgOrderByAggregateInput, {nullable:true})
    _avg?: CampaignAvgOrderByAggregateInput;

    @Field(() => CampaignMaxOrderByAggregateInput, {nullable:true})
    _max?: CampaignMaxOrderByAggregateInput;

    @Field(() => CampaignMinOrderByAggregateInput, {nullable:true})
    _min?: CampaignMinOrderByAggregateInput;

    @Field(() => CampaignSumOrderByAggregateInput, {nullable:true})
    _sum?: CampaignSumOrderByAggregateInput;
}
