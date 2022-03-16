import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerCreateWithoutCustomerCampaignInput } from './customer-create-without-customer-campaign.input';

@InputType()
export class CustomerCreateOrConnectWithoutCustomerCampaignInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerCreateWithoutCustomerCampaignInput, {nullable:false})
    create!: CustomerCreateWithoutCustomerCampaignInput;
}
