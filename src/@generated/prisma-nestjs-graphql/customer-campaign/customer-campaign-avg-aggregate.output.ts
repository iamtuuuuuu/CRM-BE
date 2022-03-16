import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CustomerCampaignAvgAggregate {

    @Field(() => Float, {nullable:true})
    customerId?: number;

    @Field(() => Float, {nullable:true})
    campaignId?: number;

    @Field(() => Float, {nullable:true})
    id?: number;
}
