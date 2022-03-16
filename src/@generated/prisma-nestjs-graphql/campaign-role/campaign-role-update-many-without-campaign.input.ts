import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleCreateWithoutCampaignInput } from './campaign-role-create-without-campaign.input';
import { CampaignRoleCreateOrConnectWithoutCampaignInput } from './campaign-role-create-or-connect-without-campaign.input';
import { CampaignRoleUpsertWithWhereUniqueWithoutCampaignInput } from './campaign-role-upsert-with-where-unique-without-campaign.input';
import { CampaignRoleCreateManyCampaignInputEnvelope } from './campaign-role-create-many-campaign-input-envelope.input';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';
import { CampaignRoleUpdateWithWhereUniqueWithoutCampaignInput } from './campaign-role-update-with-where-unique-without-campaign.input';
import { CampaignRoleUpdateManyWithWhereWithoutCampaignInput } from './campaign-role-update-many-with-where-without-campaign.input';
import { CampaignRoleScalarWhereInput } from './campaign-role-scalar-where.input';

@InputType()
export class CampaignRoleUpdateManyWithoutCampaignInput {

    @Field(() => [CampaignRoleCreateWithoutCampaignInput], {nullable:true})
    create?: Array<CampaignRoleCreateWithoutCampaignInput>;

    @Field(() => [CampaignRoleCreateOrConnectWithoutCampaignInput], {nullable:true})
    connectOrCreate?: Array<CampaignRoleCreateOrConnectWithoutCampaignInput>;

    @Field(() => [CampaignRoleUpsertWithWhereUniqueWithoutCampaignInput], {nullable:true})
    upsert?: Array<CampaignRoleUpsertWithWhereUniqueWithoutCampaignInput>;

    @Field(() => CampaignRoleCreateManyCampaignInputEnvelope, {nullable:true})
    createMany?: CampaignRoleCreateManyCampaignInputEnvelope;

    @Field(() => [CampaignRoleWhereUniqueInput], {nullable:true})
    set?: Array<CampaignRoleWhereUniqueInput>;

    @Field(() => [CampaignRoleWhereUniqueInput], {nullable:true})
    disconnect?: Array<CampaignRoleWhereUniqueInput>;

    @Field(() => [CampaignRoleWhereUniqueInput], {nullable:true})
    delete?: Array<CampaignRoleWhereUniqueInput>;

    @Field(() => [CampaignRoleWhereUniqueInput], {nullable:true})
    connect?: Array<CampaignRoleWhereUniqueInput>;

    @Field(() => [CampaignRoleUpdateWithWhereUniqueWithoutCampaignInput], {nullable:true})
    update?: Array<CampaignRoleUpdateWithWhereUniqueWithoutCampaignInput>;

    @Field(() => [CampaignRoleUpdateManyWithWhereWithoutCampaignInput], {nullable:true})
    updateMany?: Array<CampaignRoleUpdateManyWithWhereWithoutCampaignInput>;

    @Field(() => [CampaignRoleScalarWhereInput], {nullable:true})
    deleteMany?: Array<CampaignRoleScalarWhereInput>;
}
