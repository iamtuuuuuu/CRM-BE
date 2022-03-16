import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignUpdateWithoutCustomerCampaignInput } from './campaign-update-without-customer-campaign.input';
import { CampaignCreateWithoutCustomerCampaignInput } from './campaign-create-without-customer-campaign.input';

@InputType()
export class CampaignUpsertWithoutCustomerCampaignInput {

    @Field(() => CampaignUpdateWithoutCustomerCampaignInput, {nullable:false})
    update!: CampaignUpdateWithoutCustomerCampaignInput;

    @Field(() => CampaignCreateWithoutCustomerCampaignInput, {nullable:false})
    create!: CampaignCreateWithoutCustomerCampaignInput;
}
