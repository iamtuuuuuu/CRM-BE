import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CampaignTaskCampaignIdTaskIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    campaignId!: number;

    @Field(() => Int, {nullable:false})
    taskId!: number;
}
