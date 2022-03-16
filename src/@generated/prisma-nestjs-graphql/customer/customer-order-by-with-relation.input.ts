import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CustomerContactOrderByWithRelationInput } from '../customer-contact/customer-contact-order-by-with-relation.input';
import { CustomerCampaignOrderByRelationAggregateInput } from '../customer-campaign/customer-campaign-order-by-relation-aggregate.input';
import { EmailSentOrderByRelationAggregateInput } from '../email-sent/email-sent-order-by-relation-aggregate.input';
import { ProblemOrderByRelationAggregateInput } from '../problem/problem-order-by-relation-aggregate.input';

@InputType()
export class CustomerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dob?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerContactId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => CustomerContactOrderByWithRelationInput, {nullable:true})
    CustomerContact?: CustomerContactOrderByWithRelationInput;

    @Field(() => CustomerCampaignOrderByRelationAggregateInput, {nullable:true})
    CustomerCampaign?: CustomerCampaignOrderByRelationAggregateInput;

    @Field(() => EmailSentOrderByRelationAggregateInput, {nullable:true})
    EmailSent?: EmailSentOrderByRelationAggregateInput;

    @Field(() => ProblemOrderByRelationAggregateInput, {nullable:true})
    Problem?: ProblemOrderByRelationAggregateInput;
}
