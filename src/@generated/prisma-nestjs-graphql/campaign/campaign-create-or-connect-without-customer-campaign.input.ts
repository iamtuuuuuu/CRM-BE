import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignCreateWithoutCustomerCampaignInput } from './campaign-create-without-customer-campaign.input';

@InputType()
export class CampaignCreateOrConnectWithoutCustomerCampaignInput {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;

    @Field(() => CampaignCreateWithoutCustomerCampaignInput, {nullable:false})
    create!: CampaignCreateWithoutCustomerCampaignInput;
}
