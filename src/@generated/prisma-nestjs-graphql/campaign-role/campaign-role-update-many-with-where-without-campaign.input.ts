import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleScalarWhereInput } from './campaign-role-scalar-where.input';
import { CampaignRoleUpdateManyMutationInput } from './campaign-role-update-many-mutation.input';

@InputType()
export class CampaignRoleUpdateManyWithWhereWithoutCampaignInput {

    @Field(() => CampaignRoleScalarWhereInput, {nullable:false})
    where!: CampaignRoleScalarWhereInput;

    @Field(() => CampaignRoleUpdateManyMutationInput, {nullable:false})
    data!: CampaignRoleUpdateManyMutationInput;
}
