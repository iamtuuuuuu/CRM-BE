import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';
import { CampaignRoleCreateInput } from './campaign-role-create.input';
import { CampaignRoleUpdateInput } from './campaign-role-update.input';

@ArgsType()
export class UpsertOneCampaignRoleArgs {

    @Field(() => CampaignRoleWhereUniqueInput, {nullable:false})
    where!: CampaignRoleWhereUniqueInput;

    @Field(() => CampaignRoleCreateInput, {nullable:false})
    create!: CampaignRoleCreateInput;

    @Field(() => CampaignRoleUpdateInput, {nullable:false})
    update!: CampaignRoleUpdateInput;
}
