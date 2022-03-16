import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Campaign } from '../campaign/campaign.model';
import { CampaignStatusCount } from '../campaign/campaign-status-count.output';

@ObjectType()
export class CampaignStatus {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => [Campaign], {nullable:true})
    Campaign?: Array<Campaign>;

    @Field(() => CampaignStatusCount, {nullable:false})
    _count?: CampaignStatusCount;
}
