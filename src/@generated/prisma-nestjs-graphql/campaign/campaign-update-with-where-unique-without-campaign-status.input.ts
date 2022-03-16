import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignUpdateWithoutCampaignStatusInput } from './campaign-update-without-campaign-status.input';

@InputType()
export class CampaignUpdateWithWhereUniqueWithoutCampaignStatusInput {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;

    @Field(() => CampaignUpdateWithoutCampaignStatusInput, {nullable:false})
    data!: CampaignUpdateWithoutCampaignStatusInput;
}
