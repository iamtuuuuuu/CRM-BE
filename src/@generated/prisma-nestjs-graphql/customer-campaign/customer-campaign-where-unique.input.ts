import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomerCampaignCustomerIdCampaignIdCompoundUniqueInput } from './customer-campaign-customer-id-campaign-id-compound-unique.input';

@InputType()
export class CustomerCampaignWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => CustomerCampaignCustomerIdCampaignIdCompoundUniqueInput, {nullable:true})
    customerId_campaignId?: CustomerCampaignCustomerIdCampaignIdCompoundUniqueInput;
}
