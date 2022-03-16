import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CampaignTaskUncheckedCreateWithoutTaskInput {

    @Field(() => Int, {nullable:false})
    campaignId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    isDone!: boolean;
}
