import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';
import { CampaignRoleUpdateWithoutCampaignInput } from './campaign-role-update-without-campaign.input';

@InputType()
export class CampaignRoleUpdateWithWhereUniqueWithoutCampaignInput {

    @Field(() => CampaignRoleWhereUniqueInput, {nullable:false})
    where!: CampaignRoleWhereUniqueInput;

    @Field(() => CampaignRoleUpdateWithoutCampaignInput, {nullable:false})
    data!: CampaignRoleUpdateWithoutCampaignInput;
}
