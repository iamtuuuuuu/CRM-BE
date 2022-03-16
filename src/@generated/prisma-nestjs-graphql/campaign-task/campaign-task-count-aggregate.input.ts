import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CampaignTaskCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    campaignId?: true;

    @Field(() => Boolean, {nullable:true})
    taskId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    isDone?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
