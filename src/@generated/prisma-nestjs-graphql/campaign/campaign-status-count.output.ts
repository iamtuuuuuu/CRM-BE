import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CampaignStatusCount {

    @Field(() => Int, {nullable:false})
    Campaign?: number;
}
