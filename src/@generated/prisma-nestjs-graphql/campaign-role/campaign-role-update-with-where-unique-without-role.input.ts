import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';
import { CampaignRoleUpdateWithoutRoleInput } from './campaign-role-update-without-role.input';

@InputType()
export class CampaignRoleUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => CampaignRoleWhereUniqueInput, {nullable:false})
    where!: CampaignRoleWhereUniqueInput;

    @Field(() => CampaignRoleUpdateWithoutRoleInput, {nullable:false})
    data!: CampaignRoleUpdateWithoutRoleInput;
}
