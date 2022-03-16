import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';
import { CampaignTaskUpdateWithoutTaskInput } from './campaign-task-update-without-task.input';
import { CampaignTaskCreateWithoutTaskInput } from './campaign-task-create-without-task.input';

@InputType()
export class CampaignTaskUpsertWithWhereUniqueWithoutTaskInput {

    @Field(() => CampaignTaskWhereUniqueInput, {nullable:false})
    where!: CampaignTaskWhereUniqueInput;

    @Field(() => CampaignTaskUpdateWithoutTaskInput, {nullable:false})
    update!: CampaignTaskUpdateWithoutTaskInput;

    @Field(() => CampaignTaskCreateWithoutTaskInput, {nullable:false})
    create!: CampaignTaskCreateWithoutTaskInput;
}
