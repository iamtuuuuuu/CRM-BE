import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleCreateWithoutRoleInput } from './campaign-role-create-without-role.input';
import { CampaignRoleCreateOrConnectWithoutRoleInput } from './campaign-role-create-or-connect-without-role.input';
import { CampaignRoleUpsertWithWhereUniqueWithoutRoleInput } from './campaign-role-upsert-with-where-unique-without-role.input';
import { CampaignRoleCreateManyRoleInputEnvelope } from './campaign-role-create-many-role-input-envelope.input';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';
import { CampaignRoleUpdateWithWhereUniqueWithoutRoleInput } from './campaign-role-update-with-where-unique-without-role.input';
import { CampaignRoleUpdateManyWithWhereWithoutRoleInput } from './campaign-role-update-many-with-where-without-role.input';
import { CampaignRoleScalarWhereInput } from './campaign-role-scalar-where.input';

@InputType()
export class CampaignRoleUpdateManyWithoutRoleInput {

    @Field(() => [CampaignRoleCreateWithoutRoleInput], {nullable:true})
    create?: Array<CampaignRoleCreateWithoutRoleInput>;

    @Field(() => [CampaignRoleCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<CampaignRoleCreateOrConnectWithoutRoleInput>;

    @Field(() => [CampaignRoleUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    upsert?: Array<CampaignRoleUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => CampaignRoleCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: CampaignRoleCreateManyRoleInputEnvelope;

    @Field(() => [CampaignRoleWhereUniqueInput], {nullable:true})
    set?: Array<CampaignRoleWhereUniqueInput>;

    @Field(() => [CampaignRoleWhereUniqueInput], {nullable:true})
    disconnect?: Array<CampaignRoleWhereUniqueInput>;

    @Field(() => [CampaignRoleWhereUniqueInput], {nullable:true})
    delete?: Array<CampaignRoleWhereUniqueInput>;

    @Field(() => [CampaignRoleWhereUniqueInput], {nullable:true})
    connect?: Array<CampaignRoleWhereUniqueInput>;

    @Field(() => [CampaignRoleUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    update?: Array<CampaignRoleUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [CampaignRoleUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    updateMany?: Array<CampaignRoleUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [CampaignRoleScalarWhereInput], {nullable:true})
    deleteMany?: Array<CampaignRoleScalarWhereInput>;
}
