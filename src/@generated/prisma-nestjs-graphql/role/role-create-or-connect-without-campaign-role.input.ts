import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleCreateWithoutCampaignRoleInput } from './role-create-without-campaign-role.input';

@InputType()
export class RoleCreateOrConnectWithoutCampaignRoleInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutCampaignRoleInput, {nullable:false})
    create!: RoleCreateWithoutCampaignRoleInput;
}
