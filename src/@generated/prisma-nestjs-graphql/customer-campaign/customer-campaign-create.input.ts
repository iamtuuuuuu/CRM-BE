import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateNestedOneWithoutCustomerCampaignInput } from '../campaign/campaign-create-nested-one-without-customer-campaign.input';
import { CustomerCreateNestedOneWithoutCustomerCampaignInput } from '../customer/customer-create-nested-one-without-customer-campaign.input';

@InputType()
export class CustomerCampaignCreateInput {

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => CampaignCreateNestedOneWithoutCustomerCampaignInput, {nullable:false})
    campaign!: CampaignCreateNestedOneWithoutCustomerCampaignInput;

    @Field(() => CustomerCreateNestedOneWithoutCustomerCampaignInput, {nullable:false})
    customer!: CustomerCreateNestedOneWithoutCustomerCampaignInput;
}
