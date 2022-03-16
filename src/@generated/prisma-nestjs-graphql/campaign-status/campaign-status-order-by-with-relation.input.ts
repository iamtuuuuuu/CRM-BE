import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampaignOrderByRelationAggregateInput } from '../campaign/campaign-order-by-relation-aggregate.input';

@InputType()
export class CampaignStatusOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => CampaignOrderByRelationAggregateInput, {nullable:true})
    Campaign?: CampaignOrderByRelationAggregateInput;
}
