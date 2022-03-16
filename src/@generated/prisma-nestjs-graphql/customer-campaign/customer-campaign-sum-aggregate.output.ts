import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CustomerCampaignSumAggregate {

    @Field(() => Int, {nullable:true})
    customerId?: number;

    @Field(() => Int, {nullable:true})
    campaignId?: number;

    @Field(() => Int, {nullable:true})
    id?: number;
}
