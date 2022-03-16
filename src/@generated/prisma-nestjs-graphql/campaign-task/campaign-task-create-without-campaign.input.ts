import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedOneWithoutCampaignTaskInput } from '../task/task-create-nested-one-without-campaign-task.input';

@InputType()
export class CampaignTaskCreateWithoutCampaignInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    isDone!: boolean;

    @Field(() => TaskCreateNestedOneWithoutCampaignTaskInput, {nullable:false})
    task!: TaskCreateNestedOneWithoutCampaignTaskInput;
}
