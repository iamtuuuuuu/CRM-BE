import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutCampaignTaskInput } from './task-create-without-campaign-task.input';
import { TaskCreateOrConnectWithoutCampaignTaskInput } from './task-create-or-connect-without-campaign-task.input';
import { TaskUpsertWithoutCampaignTaskInput } from './task-upsert-without-campaign-task.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutCampaignTaskInput } from './task-update-without-campaign-task.input';

@InputType()
export class TaskUpdateOneRequiredWithoutCampaignTaskInput {

    @Field(() => TaskCreateWithoutCampaignTaskInput, {nullable:true})
    create?: TaskCreateWithoutCampaignTaskInput;

    @Field(() => TaskCreateOrConnectWithoutCampaignTaskInput, {nullable:true})
    connectOrCreate?: TaskCreateOrConnectWithoutCampaignTaskInput;

    @Field(() => TaskUpsertWithoutCampaignTaskInput, {nullable:true})
    upsert?: TaskUpsertWithoutCampaignTaskInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutCampaignTaskInput, {nullable:true})
    update?: TaskUpdateWithoutCampaignTaskInput;
}
