import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Campaign } from '../campaign/campaign.model';
import { Role } from '../role/role.model';

@ObjectType()
export class CampaignRole {

    @Field(() => Int, {nullable:false})
    campaignId!: number;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Campaign, {nullable:false})
    campaign?: Campaign;

    @Field(() => Role, {nullable:false})
    role?: Role;
}
