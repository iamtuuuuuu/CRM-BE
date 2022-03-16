import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampaignStatusCountOrderByAggregateInput } from './campaign-status-count-order-by-aggregate.input';
import { CampaignStatusAvgOrderByAggregateInput } from './campaign-status-avg-order-by-aggregate.input';
import { CampaignStatusMaxOrderByAggregateInput } from './campaign-status-max-order-by-aggregate.input';
import { CampaignStatusMinOrderByAggregateInput } from './campaign-status-min-order-by-aggregate.input';
import { CampaignStatusSumOrderByAggregateInput } from './campaign-status-sum-order-by-aggregate.input';

@InputType()
export class CampaignStatusOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => CampaignStatusCountOrderByAggregateInput, {nullable:true})
    _count?: CampaignStatusCountOrderByAggregateInput;

    @Field(() => CampaignStatusAvgOrderByAggregateInput, {nullable:true})
    _avg?: CampaignStatusAvgOrderByAggregateInput;

    @Field(() => CampaignStatusMaxOrderByAggregateInput, {nullable:true})
    _max?: CampaignStatusMaxOrderByAggregateInput;

    @Field(() => CampaignStatusMinOrderByAggregateInput, {nullable:true})
    _min?: CampaignStatusMinOrderByAggregateInput;

    @Field(() => CampaignStatusSumOrderByAggregateInput, {nullable:true})
    _sum?: CampaignStatusSumOrderByAggregateInput;
}
