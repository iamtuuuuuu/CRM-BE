import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';
import { CampaignRoleUpdateWithoutRoleInput } from './campaign-role-update-without-role.input';
import { CampaignRoleCreateWithoutRoleInput } from './campaign-role-create-without-role.input';

@InputType()
export class CampaignRoleUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => CampaignRoleWhereUniqueInput, {nullable:false})
    where!: CampaignRoleWhereUniqueInput;

    @Field(() => CampaignRoleUpdateWithoutRoleInput, {nullable:false})
    update!: CampaignRoleUpdateWithoutRoleInput;

    @Field(() => CampaignRoleCreateWithoutRoleInput, {nullable:false})
    create!: CampaignRoleCreateWithoutRoleInput;
}
