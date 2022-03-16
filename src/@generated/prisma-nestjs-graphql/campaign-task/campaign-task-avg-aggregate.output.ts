import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CampaignTaskAvgAggregate {

    @Field(() => Float, {nullable:true})
    campaignId?: number;

    @Field(() => Float, {nullable:true})
    taskId?: number;
}
