import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutCampaignRoleInput } from '../role/role-create-nested-one-without-campaign-role.input';

@InputType()
export class CampaignRoleCreateWithoutCampaignInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RoleCreateNestedOneWithoutCampaignRoleInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutCampaignRoleInput;
}
