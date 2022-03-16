import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Campaign } from '../campaign/campaign.model';
import { Task } from '../task/task.model';

@ObjectType()
export class CampaignTask {

    @Field(() => Int, {nullable:false})
    campaignId!: number;

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false})
    isDone!: boolean;

    @Field(() => Campaign, {nullable:false})
    campaign?: Campaign;

    @Field(() => Task, {nullable:false})
    task?: Task;
}
