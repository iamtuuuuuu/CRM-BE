import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateNestedOneWithoutCustomerCampaignInput } from '../customer/customer-create-nested-one-without-customer-campaign.input';

@InputType()
export class CustomerCampaignCreateWithoutCampaignInput {

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => CustomerCreateNestedOneWithoutCustomerCampaignInput, {nullable:false})
    customer!: CustomerCreateNestedOneWithoutCustomerCampaignInput;
}
