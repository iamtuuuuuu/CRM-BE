import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';
import { CustomerCampaignUpdateWithoutCampaignInput } from './customer-campaign-update-without-campaign.input';

@InputType()
export class CustomerCampaignUpdateWithWhereUniqueWithoutCampaignInput {

    @Field(() => CustomerCampaignWhereUniqueInput, {nullable:false})
    where!: CustomerCampaignWhereUniqueInput;

    @Field(() => CustomerCampaignUpdateWithoutCampaignInput, {nullable:false})
    data!: CustomerCampaignUpdateWithoutCampaignInput;
}
