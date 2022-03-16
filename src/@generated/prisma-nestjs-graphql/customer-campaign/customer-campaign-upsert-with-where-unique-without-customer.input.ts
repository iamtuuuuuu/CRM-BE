import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';
import { CustomerCampaignUpdateWithoutCustomerInput } from './customer-campaign-update-without-customer.input';
import { CustomerCampaignCreateWithoutCustomerInput } from './customer-campaign-create-without-customer.input';

@InputType()
export class CustomerCampaignUpsertWithWhereUniqueWithoutCustomerInput {

    @Field(() => CustomerCampaignWhereUniqueInput, {nullable:false})
    where!: CustomerCampaignWhereUniqueInput;

    @Field(() => CustomerCampaignUpdateWithoutCustomerInput, {nullable:false})
    update!: CustomerCampaignUpdateWithoutCustomerInput;

    @Field(() => CustomerCampaignCreateWithoutCustomerInput, {nullable:false})
    create!: CustomerCampaignCreateWithoutCustomerInput;
}
