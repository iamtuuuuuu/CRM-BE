import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateNestedOneWithoutCampaignRoleInput } from '../campaign/campaign-create-nested-one-without-campaign-role.input';
import { RoleCreateNestedOneWithoutCampaignRoleInput } from '../role/role-create-nested-one-without-campaign-role.input';

@InputType()
export class CampaignRoleCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CampaignCreateNestedOneWithoutCampaignRoleInput, {nullable:false})
    campaign!: CampaignCreateNestedOneWithoutCampaignRoleInput;

    @Field(() => RoleCreateNestedOneWithoutCampaignRoleInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutCampaignRoleInput;
}
