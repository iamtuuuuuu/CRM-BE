import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignStatusUpdateWithoutCampaignInput } from './campaign-status-update-without-campaign.input';
import { CampaignStatusCreateWithoutCampaignInput } from './campaign-status-create-without-campaign.input';

@InputType()
export class CampaignStatusUpsertWithoutCampaignInput {

    @Field(() => CampaignStatusUpdateWithoutCampaignInput, {nullable:false})
    update!: CampaignStatusUpdateWithoutCampaignInput;

    @Field(() => CampaignStatusCreateWithoutCampaignInput, {nullable:false})
    create!: CampaignStatusCreateWithoutCampaignInput;
}
