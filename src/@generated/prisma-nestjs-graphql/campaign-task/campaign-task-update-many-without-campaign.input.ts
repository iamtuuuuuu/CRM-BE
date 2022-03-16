import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskCreateWithoutCampaignInput } from './campaign-task-create-without-campaign.input';
import { CampaignTaskCreateOrConnectWithoutCampaignInput } from './campaign-task-create-or-connect-without-campaign.input';
import { CampaignTaskUpsertWithWhereUniqueWithoutCampaignInput } from './campaign-task-upsert-with-where-unique-without-campaign.input';
import { CampaignTaskCreateManyCampaignInputEnvelope } from './campaign-task-create-many-campaign-input-envelope.input';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';
import { CampaignTaskUpdateWithWhereUniqueWithoutCampaignInput } from './campaign-task-update-with-where-unique-without-campaign.input';
import { CampaignTaskUpdateManyWithWhereWithoutCampaignInput } from './campaign-task-update-many-with-where-without-campaign.input';
import { CampaignTaskScalarWhereInput } from './campaign-task-scalar-where.input';

@InputType()
export class CampaignTaskUpdateManyWithoutCampaignInput {

    @Field(() => [CampaignTaskCreateWithoutCampaignInput], {nullable:true})
    create?: Array<CampaignTaskCreateWithoutCampaignInput>;

    @Field(() => [CampaignTaskCreateOrConnectWithoutCampaignInput], {nullable:true})
    connectOrCreate?: Array<CampaignTaskCreateOrConnectWithoutCampaignInput>;

    @Field(() => [CampaignTaskUpsertWithWhereUniqueWithoutCampaignInput], {nullable:true})
    upsert?: Array<CampaignTaskUpsertWithWhereUniqueWithoutCampaignInput>;

    @Field(() => CampaignTaskCreateManyCampaignInputEnvelope, {nullable:true})
    createMany?: CampaignTaskCreateManyCampaignInputEnvelope;

    @Field(() => [CampaignTaskWhereUniqueInput], {nullable:true})
    set?: Array<CampaignTaskWhereUniqueInput>;

    @Field(() => [CampaignTaskWhereUniqueInput], {nullable:true})
    disconnect?: Array<CampaignTaskWhereUniqueInput>;

    @Field(() => [CampaignTaskWhereUniqueInput], {nullable:true})
    delete?: Array<CampaignTaskWhereUniqueInput>;

    @Field(() => [CampaignTaskWhereUniqueInput], {nullable:true})
    connect?: Array<CampaignTaskWhereUniqueInput>;

    @Field(() => [CampaignTaskUpdateWithWhereUniqueWithoutCampaignInput], {nullable:true})
    update?: Array<CampaignTaskUpdateWithWhereUniqueWithoutCampaignInput>;

    @Field(() => [CampaignTaskUpdateManyWithWhereWithoutCampaignInput], {nullable:true})
    updateMany?: Array<CampaignTaskUpdateManyWithWhereWithoutCampaignInput>;

    @Field(() => [CampaignTaskScalarWhereInput], {nullable:true})
    deleteMany?: Array<CampaignTaskScalarWhereInput>;
}
