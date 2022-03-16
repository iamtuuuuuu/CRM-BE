import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';
import { CampaignRoleUpdateWithoutCampaignInput } from './campaign-role-update-without-campaign.input';
import { CampaignRoleCreateWithoutCampaignInput } from './campaign-role-create-without-campaign.input';

@InputType()
export class CampaignRoleUpsertWithWhereUniqueWithoutCampaignInput {

    @Field(() => CampaignRoleWhereUniqueInput, {nullable:false})
    where!: CampaignRoleWhereUniqueInput;

    @Field(() => CampaignRoleUpdateWithoutCampaignInput, {nullable:false})
    update!: CampaignRoleUpdateWithoutCampaignInput;

    @Field(() => CampaignRoleCreateWithoutCampaignInput, {nullable:false})
    create!: CampaignRoleCreateWithoutCampaignInput;
}
