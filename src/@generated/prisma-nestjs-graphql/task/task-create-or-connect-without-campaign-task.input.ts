import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskCreateWithoutCampaignTaskInput } from './task-create-without-campaign-task.input';

@InputType()
export class TaskCreateOrConnectWithoutCampaignTaskInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutCampaignTaskInput, {nullable:false})
    create!: TaskCreateWithoutCampaignTaskInput;
}
