import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutCampaignTaskInput } from './task-update-without-campaign-task.input';
import { TaskCreateWithoutCampaignTaskInput } from './task-create-without-campaign-task.input';

@InputType()
export class TaskUpsertWithoutCampaignTaskInput {

    @Field(() => TaskUpdateWithoutCampaignTaskInput, {nullable:false})
    update!: TaskUpdateWithoutCampaignTaskInput;

    @Field(() => TaskCreateWithoutCampaignTaskInput, {nullable:false})
    create!: TaskCreateWithoutCampaignTaskInput;
}
