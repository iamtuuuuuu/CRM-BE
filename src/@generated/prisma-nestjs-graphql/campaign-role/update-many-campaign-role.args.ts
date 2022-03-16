import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignRoleUpdateManyMutationInput } from './campaign-role-update-many-mutation.input';
import { CampaignRoleWhereInput } from './campaign-role-where.input';

@ArgsType()
export class UpdateManyCampaignRoleArgs {

    @Field(() => CampaignRoleUpdateManyMutationInput, {nullable:false})
    data!: CampaignRoleUpdateManyMutationInput;

    @Field(() => CampaignRoleWhereInput, {nullable:true})
    where?: CampaignRoleWhereInput;
}
