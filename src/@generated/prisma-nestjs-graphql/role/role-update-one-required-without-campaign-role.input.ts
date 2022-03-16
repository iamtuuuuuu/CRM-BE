import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutCampaignRoleInput } from './role-create-without-campaign-role.input';
import { RoleCreateOrConnectWithoutCampaignRoleInput } from './role-create-or-connect-without-campaign-role.input';
import { RoleUpsertWithoutCampaignRoleInput } from './role-upsert-without-campaign-role.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutCampaignRoleInput } from './role-update-without-campaign-role.input';

@InputType()
export class RoleUpdateOneRequiredWithoutCampaignRoleInput {

    @Field(() => RoleCreateWithoutCampaignRoleInput, {nullable:true})
    create?: RoleCreateWithoutCampaignRoleInput;

    @Field(() => RoleCreateOrConnectWithoutCampaignRoleInput, {nullable:true})
    connectOrCreate?: RoleCreateOrConnectWithoutCampaignRoleInput;

    @Field(() => RoleUpsertWithoutCampaignRoleInput, {nullable:true})
    upsert?: RoleUpsertWithoutCampaignRoleInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    connect?: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutCampaignRoleInput, {nullable:true})
    update?: RoleUpdateWithoutCampaignRoleInput;
}
