import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutCampaignTaskInput } from './task-create-without-campaign-task.input';
import { TaskCreateOrConnectWithoutCampaignTaskInput } from './task-create-or-connect-without-campaign-task.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutCampaignTaskInput {

    @Field(() => TaskCreateWithoutCampaignTaskInput, {nullable:true})
    create?: TaskCreateWithoutCampaignTaskInput;

    @Field(() => TaskCreateOrConnectWithoutCampaignTaskInput, {nullable:true})
    connectOrCreate?: TaskCreateOrConnectWithoutCampaignTaskInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    connect?: TaskWhereUniqueInput;
}
