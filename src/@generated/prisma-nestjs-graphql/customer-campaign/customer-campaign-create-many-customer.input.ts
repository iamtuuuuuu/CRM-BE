import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CustomerCampaignCreateManyCustomerInput {

    @Field(() => Int, {nullable:false})
    campaignId!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    note?: string;
}
