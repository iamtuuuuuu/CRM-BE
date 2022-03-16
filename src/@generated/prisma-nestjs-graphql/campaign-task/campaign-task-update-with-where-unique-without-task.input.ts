import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';
import { CampaignTaskUpdateWithoutTaskInput } from './campaign-task-update-without-task.input';

@InputType()
export class CampaignTaskUpdateWithWhereUniqueWithoutTaskInput {

    @Field(() => CampaignTaskWhereUniqueInput, {nullable:false})
    where!: CampaignTaskWhereUniqueInput;

    @Field(() => CampaignTaskUpdateWithoutTaskInput, {nullable:false})
    data!: CampaignTaskUpdateWithoutTaskInput;
}
