import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutParentInput } from './campaign-create-without-parent.input';
import { CampaignCreateOrConnectWithoutParentInput } from './campaign-create-or-connect-without-parent.input';
import { CampaignUpsertWithWhereUniqueWithoutParentInput } from './campaign-upsert-with-where-unique-without-parent.input';
import { CampaignCreateManyParentInputEnvelope } from './campaign-create-many-parent-input-envelope.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignUpdateWithWhereUniqueWithoutParentInput } from './campaign-update-with-where-unique-without-parent.input';
import { CampaignUpdateManyWithWhereWithoutParentInput } from './campaign-update-many-with-where-without-parent.input';
import { CampaignScalarWhereInput } from './campaign-scalar-where.input';

@InputType()
export class CampaignUpdateManyWithoutParentInput {

    @Field(() => [CampaignCreateWithoutParentInput], {nullable:true})
    create?: Array<CampaignCreateWithoutParentInput>;

    @Field(() => [CampaignCreateOrConnectWithoutParentInput], {nullable:true})
    connectOrCreate?: Array<CampaignCreateOrConnectWithoutParentInput>;

    @Field(() => [CampaignUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    upsert?: Array<CampaignUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => CampaignCreateManyParentInputEnvelope, {nullable:true})
    createMany?: CampaignCreateManyParentInputEnvelope;

    @Field(() => [CampaignWhereUniqueInput], {nullable:true})
    set?: Array<CampaignWhereUniqueInput>;

    @Field(() => [CampaignWhereUniqueInput], {nullable:true})
    disconnect?: Array<CampaignWhereUniqueInput>;

    @Field(() => [CampaignWhereUniqueInput], {nullable:true})
    delete?: Array<CampaignWhereUniqueInput>;

    @Field(() => [CampaignWhereUniqueInput], {nullable:true})
    connect?: Array<CampaignWhereUniqueInput>;

    @Field(() => [CampaignUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    update?: Array<CampaignUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [CampaignUpdateManyWithWhereWithoutParentInput], {nullable:true})
    updateMany?: Array<CampaignUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [CampaignScalarWhereInput], {nullable:true})
    deleteMany?: Array<CampaignScalarWhereInput>;
}
