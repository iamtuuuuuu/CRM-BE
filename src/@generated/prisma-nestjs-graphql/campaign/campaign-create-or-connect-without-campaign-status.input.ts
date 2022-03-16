import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignCreateWithoutCampaignStatusInput } from './campaign-create-without-campaign-status.input';

@InputType()
export class CampaignCreateOrConnectWithoutCampaignStatusInput {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;

    @Field(() => CampaignCreateWithoutCampaignStatusInput, {nullable:false})
    create!: CampaignCreateWithoutCampaignStatusInput;
}
