import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateNestedOneWithoutCustomerCampaignInput } from '../campaign/campaign-create-nested-one-without-customer-campaign.input';

@InputType()
export class CustomerCampaignCreateWithoutCustomerInput {

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => CampaignCreateNestedOneWithoutCustomerCampaignInput, {nullable:false})
    campaign!: CampaignCreateNestedOneWithoutCustomerCampaignInput;
}
