import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';
import { CustomerCampaignUpdateWithoutCampaignInput } from './customer-campaign-update-without-campaign.input';
import { CustomerCampaignCreateWithoutCampaignInput } from './customer-campaign-create-without-campaign.input';

@InputType()
export class CustomerCampaignUpsertWithWhereUniqueWithoutCampaignInput {

    @Field(() => CustomerCampaignWhereUniqueInput, {nullable:false})
    where!: CustomerCampaignWhereUniqueInput;

    @Field(() => CustomerCampaignUpdateWithoutCampaignInput, {nullable:false})
    update!: CustomerCampaignUpdateWithoutCampaignInput;

    @Field(() => CustomerCampaignCreateWithoutCampaignInput, {nullable:false})
    create!: CustomerCampaignCreateWithoutCampaignInput;
}
