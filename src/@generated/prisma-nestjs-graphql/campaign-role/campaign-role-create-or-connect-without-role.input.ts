import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';
import { CampaignRoleCreateWithoutRoleInput } from './campaign-role-create-without-role.input';

@InputType()
export class CampaignRoleCreateOrConnectWithoutRoleInput {

    @Field(() => CampaignRoleWhereUniqueInput, {nullable:false})
    where!: CampaignRoleWhereUniqueInput;

    @Field(() => CampaignRoleCreateWithoutRoleInput, {nullable:false})
    create!: CampaignRoleCreateWithoutRoleInput;
}
