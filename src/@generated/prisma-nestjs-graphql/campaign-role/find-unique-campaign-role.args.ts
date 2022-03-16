import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';

@ArgsType()
export class FindUniqueCampaignRoleArgs {

    @Field(() => CampaignRoleWhereUniqueInput, {nullable:false})
    where!: CampaignRoleWhereUniqueInput;
}
