import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CustomerCampaignUncheckedCreateWithoutCampaignInput {

    @Field(() => Int, {nullable:false})
    customerId!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Int, {nullable:true})
    id?: number;
}
