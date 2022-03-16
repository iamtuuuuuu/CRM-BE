import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignCreateWithoutCampaignInput } from './campaign-create-without-campaign.input';

@InputType()
export class CampaignCreateOrConnectWithoutCampaignInput {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;

    @Field(() => CampaignCreateWithoutCampaignInput, {nullable:false})
    create!: CampaignCreateWithoutCampaignInput;
}
