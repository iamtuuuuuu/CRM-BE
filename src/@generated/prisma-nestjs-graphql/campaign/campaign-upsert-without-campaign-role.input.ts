import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignUpdateWithoutCampaignRoleInput } from './campaign-update-without-campaign-role.input';
import { CampaignCreateWithoutCampaignRoleInput } from './campaign-create-without-campaign-role.input';

@InputType()
export class CampaignUpsertWithoutCampaignRoleInput {

    @Field(() => CampaignUpdateWithoutCampaignRoleInput, {nullable:false})
    update!: CampaignUpdateWithoutCampaignRoleInput;

    @Field(() => CampaignCreateWithoutCampaignRoleInput, {nullable:false})
    create!: CampaignCreateWithoutCampaignRoleInput;
}
