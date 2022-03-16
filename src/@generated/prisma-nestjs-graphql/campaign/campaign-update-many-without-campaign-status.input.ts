import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutCampaignStatusInput } from './campaign-create-without-campaign-status.input';
import { CampaignCreateOrConnectWithoutCampaignStatusInput } from './campaign-create-or-connect-without-campaign-status.input';
import { CampaignUpsertWithWhereUniqueWithoutCampaignStatusInput } from './campaign-upsert-with-where-unique-without-campaign-status.input';
import { CampaignCreateManyCampaignStatusInputEnvelope } from './campaign-create-many-campaign-status-input-envelope.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignUpdateWithWhereUniqueWithoutCampaignStatusInput } from './campaign-update-with-where-unique-without-campaign-status.input';
import { CampaignUpdateManyWithWhereWithoutCampaignStatusInput } from './campaign-update-many-with-where-without-campaign-status.input';
import { CampaignScalarWhereInput } from './campaign-scalar-where.input';

@InputType()
export class CampaignUpdateManyWithoutCampaignStatusInput {

    @Field(() => [CampaignCreateWithoutCampaignStatusInput], {nullable:true})
    create?: Array<CampaignCreateWithoutCampaignStatusInput>;

    @Field(() => [CampaignCreateOrConnectWithoutCampaignStatusInput], {nullable:true})
    connectOrCreate?: Array<CampaignCreateOrConnectWithoutCampaignStatusInput>;

    @Field(() => [CampaignUpsertWithWhereUniqueWithoutCampaignStatusInput], {nullable:true})
    upsert?: Array<CampaignUpsertWithWhereUniqueWithoutCampaignStatusInput>;

    @Field(() => CampaignCreateManyCampaignStatusInputEnvelope, {nullable:true})
    createMany?: CampaignCreateManyCampaignStatusInputEnvelope;

    @Field(() => [CampaignWhereUniqueInput], {nullable:true})
    set?: Array<CampaignWhereUniqueInput>;

    @Field(() => [CampaignWhereUniqueInput], {nullable:true})
    disconnect?: Array<CampaignWhereUniqueInput>;

    @Field(() => [CampaignWhereUniqueInput], {nullable:true})
    delete?: Array<CampaignWhereUniqueInput>;

    @Field(() => [CampaignWhereUniqueInput], {nullable:true})
    connect?: Array<CampaignWhereUniqueInput>;

    @Field(() => [CampaignUpdateWithWhereUniqueWithoutCampaignStatusInput], {nullable:true})
    update?: Array<CampaignUpdateWithWhereUniqueWithoutCampaignStatusInput>;

    @Field(() => [CampaignUpdateManyWithWhereWithoutCampaignStatusInput], {nullable:true})
    updateMany?: Array<CampaignUpdateManyWithWhereWithoutCampaignStatusInput>;

    @Field(() => [CampaignScalarWhereInput], {nullable:true})
    deleteMany?: Array<CampaignScalarWhereInput>;
}
