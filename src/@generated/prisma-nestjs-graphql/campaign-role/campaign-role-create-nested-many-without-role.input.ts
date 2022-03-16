import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleCreateWithoutRoleInput } from './campaign-role-create-without-role.input';
import { CampaignRoleCreateOrConnectWithoutRoleInput } from './campaign-role-create-or-connect-without-role.input';
import { CampaignRoleCreateManyRoleInputEnvelope } from './campaign-role-create-many-role-input-envelope.input';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';

@InputType()
export class CampaignRoleCreateNestedManyWithoutRoleInput {

    @Field(() => [CampaignRoleCreateWithoutRoleInput], {nullable:true})
    create?: Array<CampaignRoleCreateWithoutRoleInput>;

    @Field(() => [CampaignRoleCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<CampaignRoleCreateOrConnectWithoutRoleInput>;

    @Field(() => CampaignRoleCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: CampaignRoleCreateManyRoleInputEnvelope;

    @Field(() => [CampaignRoleWhereUniqueInput], {nullable:true})
    connect?: Array<CampaignRoleWhereUniqueInput>;
}
