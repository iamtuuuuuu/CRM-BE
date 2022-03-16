import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleRoleIdCampaignIdCompoundUniqueInput } from './campaign-role-role-id-campaign-id-compound-unique.input';

@InputType()
export class CampaignRoleWhereUniqueInput {

    @Field(() => CampaignRoleRoleIdCampaignIdCompoundUniqueInput, {nullable:true})
    roleId_campaignId?: CampaignRoleRoleIdCampaignIdCompoundUniqueInput;
}
