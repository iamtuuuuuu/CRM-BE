import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignUpdateWithoutCampaignInput } from './campaign-update-without-campaign.input';
import { CampaignCreateWithoutCampaignInput } from './campaign-create-without-campaign.input';

@InputType()
export class CampaignUpsertWithoutCampaignInput {

    @Field(() => CampaignUpdateWithoutCampaignInput, {nullable:false})
    update!: CampaignUpdateWithoutCampaignInput;

    @Field(() => CampaignCreateWithoutCampaignInput, {nullable:false})
    create!: CampaignCreateWithoutCampaignInput;
}
