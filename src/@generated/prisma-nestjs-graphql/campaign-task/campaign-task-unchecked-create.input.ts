import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CampaignTaskUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    campaignId!: number;

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    isDone!: boolean;
}
