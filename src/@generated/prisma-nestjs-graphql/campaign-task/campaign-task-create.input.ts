import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateNestedOneWithoutCampaignTaskInput } from '../campaign/campaign-create-nested-one-without-campaign-task.input';
import { TaskCreateNestedOneWithoutCampaignTaskInput } from '../task/task-create-nested-one-without-campaign-task.input';

@InputType()
export class CampaignTaskCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    isDone!: boolean;

    @Field(() => CampaignCreateNestedOneWithoutCampaignTaskInput, {nullable:false})
    campaign!: CampaignCreateNestedOneWithoutCampaignTaskInput;

    @Field(() => TaskCreateNestedOneWithoutCampaignTaskInput, {nullable:false})
    task!: TaskCreateNestedOneWithoutCampaignTaskInput;
}
