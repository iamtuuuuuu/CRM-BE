import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignStatusCreateWithoutCampaignInput } from './campaign-status-create-without-campaign.input';
import { CampaignStatusCreateOrConnectWithoutCampaignInput } from './campaign-status-create-or-connect-without-campaign.input';
import { CampaignStatusWhereUniqueInput } from './campaign-status-where-unique.input';

@InputType()
export class CampaignStatusCreateNestedOneWithoutCampaignInput {

    @Field(() => CampaignStatusCreateWithoutCampaignInput, {nullable:true})
    create?: CampaignStatusCreateWithoutCampaignInput;

    @Field(() => CampaignStatusCreateOrConnectWithoutCampaignInput, {nullable:true})
    connectOrCreate?: CampaignStatusCreateOrConnectWithoutCampaignInput;

    @Field(() => CampaignStatusWhereUniqueInput, {nullable:true})
    connect?: CampaignStatusWhereUniqueInput;
}
