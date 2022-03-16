import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';
import { CampaignTaskCreateWithoutTaskInput } from './campaign-task-create-without-task.input';

@InputType()
export class CampaignTaskCreateOrConnectWithoutTaskInput {

    @Field(() => CampaignTaskWhereUniqueInput, {nullable:false})
    where!: CampaignTaskWhereUniqueInput;

    @Field(() => CampaignTaskCreateWithoutTaskInput, {nullable:false})
    create!: CampaignTaskCreateWithoutTaskInput;
}
