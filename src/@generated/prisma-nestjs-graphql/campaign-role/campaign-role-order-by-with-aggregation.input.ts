import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampaignRoleCountOrderByAggregateInput } from './campaign-role-count-order-by-aggregate.input';
import { CampaignRoleAvgOrderByAggregateInput } from './campaign-role-avg-order-by-aggregate.input';
import { CampaignRoleMaxOrderByAggregateInput } from './campaign-role-max-order-by-aggregate.input';
import { CampaignRoleMinOrderByAggregateInput } from './campaign-role-min-order-by-aggregate.input';
import { CampaignRoleSumOrderByAggregateInput } from './campaign-role-sum-order-by-aggregate.input';

@InputType()
export class CampaignRoleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    campaignId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CampaignRoleCountOrderByAggregateInput, {nullable:true})
    _count?: CampaignRoleCountOrderByAggregateInput;

    @Field(() => CampaignRoleAvgOrderByAggregateInput, {nullable:true})
    _avg?: CampaignRoleAvgOrderByAggregateInput;

    @Field(() => CampaignRoleMaxOrderByAggregateInput, {nullable:true})
    _max?: CampaignRoleMaxOrderByAggregateInput;

    @Field(() => CampaignRoleMinOrderByAggregateInput, {nullable:true})
    _min?: CampaignRoleMinOrderByAggregateInput;

    @Field(() => CampaignRoleSumOrderByAggregateInput, {nullable:true})
    _sum?: CampaignRoleSumOrderByAggregateInput;
}
