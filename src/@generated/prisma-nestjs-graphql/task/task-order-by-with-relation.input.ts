import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampaignTaskOrderByRelationAggregateInput } from '../campaign-task/campaign-task-order-by-relation-aggregate.input';
import { ProductTaskOrderByRelationAggregateInput } from '../product-task/product-task-order-by-relation-aggregate.input';

@InputType()
export class TaskOrderByWithRelationInput {

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

    @Field(() => CampaignTaskOrderByRelationAggregateInput, {nullable:true})
    CampaignTask?: CampaignTaskOrderByRelationAggregateInput;

    @Field(() => ProductTaskOrderByRelationAggregateInput, {nullable:true})
    ProductTask?: ProductTaskOrderByRelationAggregateInput;
}
