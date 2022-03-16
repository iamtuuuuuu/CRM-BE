import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignRoleCreateInput } from './campaign-role-create.input';

@ArgsType()
export class CreateOneCampaignRoleArgs {

    @Field(() => CampaignRoleCreateInput, {nullable:false})
    data!: CampaignRoleCreateInput;
}
