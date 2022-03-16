import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskCreateWithoutTaskInput } from './campaign-task-create-without-task.input';
import { CampaignTaskCreateOrConnectWithoutTaskInput } from './campaign-task-create-or-connect-without-task.input';
import { CampaignTaskCreateManyTaskInputEnvelope } from './campaign-task-create-many-task-input-envelope.input';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';

@InputType()
export class CampaignTaskUncheckedCreateNestedManyWithoutTaskInput {

    @Field(() => [CampaignTaskCreateWithoutTaskInput], {nullable:true})
    create?: Array<CampaignTaskCreateWithoutTaskInput>;

    @Field(() => [CampaignTaskCreateOrConnectWithoutTaskInput], {nullable:true})
    connectOrCreate?: Array<CampaignTaskCreateOrConnectWithoutTaskInput>;

    @Field(() => CampaignTaskCreateManyTaskInputEnvelope, {nullable:true})
    createMany?: CampaignTaskCreateManyTaskInputEnvelope;

    @Field(() => [CampaignTaskWhereUniqueInput], {nullable:true})
    connect?: Array<CampaignTaskWhereUniqueInput>;
}
