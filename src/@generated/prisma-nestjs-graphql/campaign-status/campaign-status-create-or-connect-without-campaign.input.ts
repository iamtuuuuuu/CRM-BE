import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignStatusWhereUniqueInput } from './campaign-status-where-unique.input';
import { CampaignStatusCreateWithoutCampaignInput } from './campaign-status-create-without-campaign.input';

@InputType()
export class CampaignStatusCreateOrConnectWithoutCampaignInput {

    @Field(() => CampaignStatusWhereUniqueInput, {nullable:false})
    where!: CampaignStatusWhereUniqueInput;

    @Field(() => CampaignStatusCreateWithoutCampaignInput, {nullable:false})
    create!: CampaignStatusCreateWithoutCampaignInput;
}
