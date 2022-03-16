import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutCampaignRoleInput } from './role-create-without-campaign-role.input';
import { RoleCreateOrConnectWithoutCampaignRoleInput } from './role-create-or-connect-without-campaign-role.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutCampaignRoleInput {

    @Field(() => RoleCreateWithoutCampaignRoleInput, {nullable:true})
    create?: RoleCreateWithoutCampaignRoleInput;

    @Field(() => RoleCreateOrConnectWithoutCampaignRoleInput, {nullable:true})
    connectOrCreate?: RoleCreateOrConnectWithoutCampaignRoleInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    connect?: RoleWhereUniqueInput;
}
