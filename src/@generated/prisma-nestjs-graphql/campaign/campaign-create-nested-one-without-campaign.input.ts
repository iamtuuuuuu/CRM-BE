import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutCampaignInput } from './campaign-create-without-campaign.input';
import { CampaignCreateOrConnectWithoutCampaignInput } from './campaign-create-or-connect-without-campaign.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';

@InputType()
export class CampaignCreateNestedOneWithoutCampaignInput {

    @Field(() => CampaignCreateWithoutCampaignInput, {nullable:true})
    create?: CampaignCreateWithoutCampaignInput;

    @Field(() => CampaignCreateOrConnectWithoutCampaignInput, {nullable:true})
    connectOrCreate?: CampaignCreateOrConnectWithoutCampaignInput;

    @Field(() => CampaignWhereUniqueInput, {nullable:true})
    connect?: CampaignWhereUniqueInput;
}
