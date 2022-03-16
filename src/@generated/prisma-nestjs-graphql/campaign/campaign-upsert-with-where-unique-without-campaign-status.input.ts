import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignUpdateWithoutCampaignStatusInput } from './campaign-update-without-campaign-status.input';
import { CampaignCreateWithoutCampaignStatusInput } from './campaign-create-without-campaign-status.input';

@InputType()
export class CampaignUpsertWithWhereUniqueWithoutCampaignStatusInput {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;

    @Field(() => CampaignUpdateWithoutCampaignStatusInput, {nullable:false})
    update!: CampaignUpdateWithoutCampaignStatusInput;

    @Field(() => CampaignCreateWithoutCampaignStatusInput, {nullable:false})
    create!: CampaignCreateWithoutCampaignStatusInput;
}
