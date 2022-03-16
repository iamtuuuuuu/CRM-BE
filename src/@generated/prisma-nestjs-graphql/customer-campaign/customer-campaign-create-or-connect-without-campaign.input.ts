import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';
import { CustomerCampaignCreateWithoutCampaignInput } from './customer-campaign-create-without-campaign.input';

@InputType()
export class CustomerCampaignCreateOrConnectWithoutCampaignInput {

    @Field(() => CustomerCampaignWhereUniqueInput, {nullable:false})
    where!: CustomerCampaignWhereUniqueInput;

    @Field(() => CustomerCampaignCreateWithoutCampaignInput, {nullable:false})
    create!: CustomerCampaignCreateWithoutCampaignInput;
}
