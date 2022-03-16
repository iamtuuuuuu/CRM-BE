import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutCampaignRoleInput } from './role-update-without-campaign-role.input';
import { RoleCreateWithoutCampaignRoleInput } from './role-create-without-campaign-role.input';

@InputType()
export class RoleUpsertWithoutCampaignRoleInput {

    @Field(() => RoleUpdateWithoutCampaignRoleInput, {nullable:false})
    update!: RoleUpdateWithoutCampaignRoleInput;

    @Field(() => RoleCreateWithoutCampaignRoleInput, {nullable:false})
    create!: RoleCreateWithoutCampaignRoleInput;
}
