import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampaignTaskCountOrderByAggregateInput } from './campaign-task-count-order-by-aggregate.input';
import { CampaignTaskAvgOrderByAggregateInput } from './campaign-task-avg-order-by-aggregate.input';
import { CampaignTaskMaxOrderByAggregateInput } from './campaign-task-max-order-by-aggregate.input';
import { CampaignTaskMinOrderByAggregateInput } from './campaign-task-min-order-by-aggregate.input';
import { CampaignTaskSumOrderByAggregateInput } from './campaign-task-sum-order-by-aggregate.input';

@InputType()
export class CampaignTaskOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    campaignId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDone?: keyof typeof SortOrder;

    @Field(() => CampaignTaskCountOrderByAggregateInput, {nullable:true})
    _count?: CampaignTaskCountOrderByAggregateInput;

    @Field(() => CampaignTaskAvgOrderByAggregateInput, {nullable:true})
    _avg?: CampaignTaskAvgOrderByAggregateInput;

    @Field(() => CampaignTaskMaxOrderByAggregateInput, {nullable:true})
    _max?: CampaignTaskMaxOrderByAggregateInput;

    @Field(() => CampaignTaskMinOrderByAggregateInput, {nullable:true})
    _min?: CampaignTaskMinOrderByAggregateInput;

    @Field(() => CampaignTaskSumOrderByAggregateInput, {nullable:true})
    _sum?: CampaignTaskSumOrderByAggregateInput;
}
