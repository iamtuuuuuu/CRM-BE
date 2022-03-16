import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskCreateWithoutTaskInput } from './campaign-task-create-without-task.input';
import { CampaignTaskCreateOrConnectWithoutTaskInput } from './campaign-task-create-or-connect-without-task.input';
import { CampaignTaskUpsertWithWhereUniqueWithoutTaskInput } from './campaign-task-upsert-with-where-unique-without-task.input';
import { CampaignTaskCreateManyTaskInputEnvelope } from './campaign-task-create-many-task-input-envelope.input';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';
import { CampaignTaskUpdateWithWhereUniqueWithoutTaskInput } from './campaign-task-update-with-where-unique-without-task.input';
import { CampaignTaskUpdateManyWithWhereWithoutTaskInput } from './campaign-task-update-many-with-where-without-task.input';
import { CampaignTaskScalarWhereInput } from './campaign-task-scalar-where.input';

@InputType()
export class CampaignTaskUpdateManyWithoutTaskInput {

    @Field(() => [CampaignTaskCreateWithoutTaskInput], {nullable:true})
    create?: Array<CampaignTaskCreateWithoutTaskInput>;

    @Field(() => [CampaignTaskCreateOrConnectWithoutTaskInput], {nullable:true})
    connectOrCreate?: Array<CampaignTaskCreateOrConnectWithoutTaskInput>;

    @Field(() => [CampaignTaskUpsertWithWhereUniqueWithoutTaskInput], {nullable:true})
    upsert?: Array<CampaignTaskUpsertWithWhereUniqueWithoutTaskInput>;

    @Field(() => CampaignTaskCreateManyTaskInputEnvelope, {nullable:true})
    createMany?: CampaignTaskCreateManyTaskInputEnvelope;

    @Field(() => [CampaignTaskWhereUniqueInput], {nullable:true})
    set?: Array<CampaignTaskWhereUniqueInput>;

    @Field(() => [CampaignTaskWhereUniqueInput], {nullable:true})
    disconnect?: Array<CampaignTaskWhereUniqueInput>;

    @Field(() => [CampaignTaskWhereUniqueInput], {nullable:true})
    delete?: Array<CampaignTaskWhereUniqueInput>;

    @Field(() => [CampaignTaskWhereUniqueInput], {nullable:true})
    connect?: Array<CampaignTaskWhereUniqueInput>;

    @Field(() => [CampaignTaskUpdateWithWhereUniqueWithoutTaskInput], {nullable:true})
    update?: Array<CampaignTaskUpdateWithWhereUniqueWithoutTaskInput>;

    @Field(() => [CampaignTaskUpdateManyWithWhereWithoutTaskInput], {nullable:true})
    updateMany?: Array<CampaignTaskUpdateManyWithWhereWithoutTaskInput>;

    @Field(() => [CampaignTaskScalarWhereInput], {nullable:true})
    deleteMany?: Array<CampaignTaskScalarWhereInput>;
}
