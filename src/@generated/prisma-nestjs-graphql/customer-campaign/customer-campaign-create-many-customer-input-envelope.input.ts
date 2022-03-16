import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignCreateManyCustomerInput } from './customer-campaign-create-many-customer.input';

@InputType()
export class CustomerCampaignCreateManyCustomerInputEnvelope {

    @Field(() => [CustomerCampaignCreateManyCustomerInput], {nullable:false})
    data!: Array<CustomerCampaignCreateManyCustomerInput>;
}
