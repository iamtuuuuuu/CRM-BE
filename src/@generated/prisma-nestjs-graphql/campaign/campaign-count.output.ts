import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CampaignCount {

    @Field(() => Int, {nullable:false})
    CampaignRole?: number;

    @Field(() => Int, {nullable:false})
    CampaignTask?: number;

    @Field(() => Int, {nullable:false})
    CustomerCampaign?: number;
}
