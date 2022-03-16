import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignRoleUpdateInput } from './campaign-role-update.input';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';

@ArgsType()
export class UpdateOneCampaignRoleArgs {

    @Field(() => CampaignRoleUpdateInput, {nullable:false})
    data!: CampaignRoleUpdateInput;

    @Field(() => CampaignRoleWhereUniqueInput, {nullable:false})
    where!: CampaignRoleWhereUniqueInput;
}
