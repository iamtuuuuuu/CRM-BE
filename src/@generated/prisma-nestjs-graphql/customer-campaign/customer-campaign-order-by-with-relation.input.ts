import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampaignOrderByWithRelationInput } from '../campaign/campaign-order-by-with-relation.input';
import { CustomerOrderByWithRelationInput } from '../customer/customer-order-by-with-relation.input';

@InputType()
export class CustomerCampaignOrderByWithRelationInput {

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

    @Field(() => CampaignOrderByWithRelationInput, {nullable:true})
    campaign?: CampaignOrderByWithRelationInput;

    @Field(() => CustomerOrderByWithRelationInput, {nullable:true})
    customer?: CustomerOrderByWithRelationInput;
}
