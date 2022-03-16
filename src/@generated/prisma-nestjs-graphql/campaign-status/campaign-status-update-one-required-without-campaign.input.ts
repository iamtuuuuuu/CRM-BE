import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignStatusCreateWithoutCampaignInput } from './campaign-status-create-without-campaign.input';
import { CampaignStatusCreateOrConnectWithoutCampaignInput } from './campaign-status-create-or-connect-without-campaign.input';
import { CampaignStatusUpsertWithoutCampaignInput } from './campaign-status-upsert-without-campaign.input';
import { CampaignStatusWhereUniqueInput } from './campaign-status-where-unique.input';
import { CampaignStatusUpdateWithoutCampaignInput } from './campaign-status-update-without-campaign.input';

@InputType()
export class CampaignStatusUpdateOneRequiredWithoutCampaignInput {

    @Field(() => CampaignStatusCreateWithoutCampaignInput, {nullable:true})
    create?: CampaignStatusCreateWithoutCampaignInput;

    @Field(() => CampaignStatusCreateOrConnectWithoutCampaignInput, {nullable:true})
    connectOrCreate?: CampaignStatusCreateOrConnectWithoutCampaignInput;

    @Field(() => CampaignStatusUpsertWithoutCampaignInput, {nullable:true})
    upsert?: CampaignStatusUpsertWithoutCampaignInput;

    @Field(() => CampaignStatusWhereUniqueInput, {nullable:true})
    connect?: CampaignStatusWhereUniqueInput;

    @Field(() => CampaignStatusUpdateWithoutCampaignInput, {nullable:true})
    update?: CampaignStatusUpdateWithoutCampaignInput;
}
