import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';
import { CustomerCampaignUpdateWithoutCustomerInput } from './customer-campaign-update-without-customer.input';

@InputType()
export class CustomerCampaignUpdateWithWhereUniqueWithoutCustomerInput {

    @Field(() => CustomerCampaignWhereUniqueInput, {nullable:false})
    where!: CustomerCampaignWhereUniqueInput;

    @Field(() => CustomerCampaignUpdateWithoutCustomerInput, {nullable:false})
    data!: CustomerCampaignUpdateWithoutCustomerInput;
}
