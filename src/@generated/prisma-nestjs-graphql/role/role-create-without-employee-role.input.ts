import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleCreateNestedManyWithoutRoleInput } from '../campaign-role/campaign-role-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutEmployeeRoleInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => CampaignRoleCreateNestedManyWithoutRoleInput, {nullable:true})
    CampaignRole?: CampaignRoleCreateNestedManyWithoutRoleInput;
}
