import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CampaignStatus } from '../campaign-status/campaign-status.model';
import { CampaignRole } from '../campaign-role/campaign-role.model';
import { CampaignTask } from '../campaign-task/campaign-task.model';
import { CustomerCampaign } from '../customer-campaign/customer-campaign.model';
import { CampaignCount } from './campaign-count.output';

@ObjectType()
export class Campaign {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false})
    campaignStatusId!: number;

    @Field(() => String, {nullable:true})
    linkImg!: string | null;

    @Field(() => CampaignStatus, {nullable:false})
    campaignStatus?: CampaignStatus;

    @Field(() => [CampaignRole], {nullable:true})
    CampaignRole?: Array<CampaignRole>;

    @Field(() => [CampaignTask], {nullable:true})
    CampaignTask?: Array<CampaignTask>;

    @Field(() => [CustomerCampaign], {nullable:true})
    CustomerCampaign?: Array<CustomerCampaign>;

    @Field(() => CampaignCount, {nullable:false})
    _count?: CampaignCount;
}
