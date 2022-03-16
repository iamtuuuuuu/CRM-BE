import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampaignStatusOrderByWithRelationInput } from '../campaign-status/campaign-status-order-by-with-relation.input';
import { CampaignRoleOrderByRelationAggregateInput } from '../campaign-role/campaign-role-order-by-relation-aggregate.input';
import { CampaignTaskOrderByRelationAggregateInput } from '../campaign-task/campaign-task-order-by-relation-aggregate.input';
import { CustomerCampaignOrderByRelationAggregateInput } from '../customer-campaign/customer-campaign-order-by-relation-aggregate.input';

@InputType()
export class CampaignOrderByWithRelationInput {

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

    @Field(() => CampaignStatusOrderByWithRelationInput, {nullable:true})
    campaignStatus?: CampaignStatusOrderByWithRelationInput;

    @Field(() => CampaignRoleOrderByRelationAggregateInput, {nullable:true})
    CampaignRole?: CampaignRoleOrderByRelationAggregateInput;

    @Field(() => CampaignTaskOrderByRelationAggregateInput, {nullable:true})
    CampaignTask?: CampaignTaskOrderByRelationAggregateInput;

    @Field(() => CustomerCampaignOrderByRelationAggregateInput, {nullable:true})
    CustomerCampaign?: CustomerCampaignOrderByRelationAggregateInput;
}
