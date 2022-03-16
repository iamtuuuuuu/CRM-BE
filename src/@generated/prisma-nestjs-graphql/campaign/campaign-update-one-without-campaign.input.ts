import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutCampaignInput } from './campaign-create-without-campaign.input';
import { CampaignCreateOrConnectWithoutCampaignInput } from './campaign-create-or-connect-without-campaign.input';
import { CampaignUpsertWithoutCampaignInput } from './campaign-upsert-without-campaign.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignUpdateWithoutCampaignInput } from './campaign-update-without-campaign.input';

@InputType()
export class CampaignUpdateOneWithoutCampaignInput {

    @Field(() => CampaignCreateWithoutCampaignInput, {nullable:true})
    create?: CampaignCreateWithoutCampaignInput;

    @Field(() => CampaignCreateOrConnectWithoutCampaignInput, {nullable:true})
    connectOrCreate?: CampaignCreateOrConnectWithoutCampaignInput;

    @Field(() => CampaignUpsertWithoutCampaignInput, {nullable:true})
    upsert?: CampaignUpsertWithoutCampaignInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CampaignWhereUniqueInput, {nullable:true})
    connect?: CampaignWhereUniqueInput;

    @Field(() => CampaignUpdateWithoutCampaignInput, {nullable:true})
    update?: CampaignUpdateWithoutCampaignInput;
}
