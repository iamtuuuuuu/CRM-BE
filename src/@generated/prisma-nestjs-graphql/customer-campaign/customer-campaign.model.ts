import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Campaign } from '../campaign/campaign.model';
import { Customer } from '../customer/customer.model';

@ObjectType()
export class CustomerCampaign {

    @Field(() => Int, {nullable:false})
    customerId!: number;

    @Field(() => Int, {nullable:false})
    campaignId!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    note!: string | null;

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Campaign, {nullable:false})
    campaign?: Campaign;

    @Field(() => Customer, {nullable:false})
    customer?: Customer;
}
