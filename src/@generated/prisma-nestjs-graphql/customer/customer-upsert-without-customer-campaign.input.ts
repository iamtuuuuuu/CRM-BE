import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerUpdateWithoutCustomerCampaignInput } from './customer-update-without-customer-campaign.input';
import { CustomerCreateWithoutCustomerCampaignInput } from './customer-create-without-customer-campaign.input';

@InputType()
export class CustomerUpsertWithoutCustomerCampaignInput {

    @Field(() => CustomerUpdateWithoutCustomerCampaignInput, {nullable:false})
    update!: CustomerUpdateWithoutCustomerCampaignInput;

    @Field(() => CustomerCreateWithoutCustomerCampaignInput, {nullable:false})
    create!: CustomerCreateWithoutCustomerCampaignInput;
}
