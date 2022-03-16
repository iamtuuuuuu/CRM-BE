import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';
import { CustomerCampaignCreateWithoutCustomerInput } from './customer-campaign-create-without-customer.input';

@InputType()
export class CustomerCampaignCreateOrConnectWithoutCustomerInput {

    @Field(() => CustomerCampaignWhereUniqueInput, {nullable:false})
    where!: CustomerCampaignWhereUniqueInput;

    @Field(() => CustomerCampaignCreateWithoutCustomerInput, {nullable:false})
    create!: CustomerCampaignCreateWithoutCustomerInput;
}
