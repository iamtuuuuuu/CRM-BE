import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CustomerCampaignMaxAggregate {

    @Field(() => Int, {nullable:true})
    customerId?: number;

    @Field(() => Int, {nullable:true})
    campaignId?: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Int, {nullable:true})
    id?: number;
}
