import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutCustomerCampaignInput } from './customer-create-without-customer-campaign.input';
import { CustomerCreateOrConnectWithoutCustomerCampaignInput } from './customer-create-or-connect-without-customer-campaign.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedOneWithoutCustomerCampaignInput {

    @Field(() => CustomerCreateWithoutCustomerCampaignInput, {nullable:true})
    create?: CustomerCreateWithoutCustomerCampaignInput;

    @Field(() => CustomerCreateOrConnectWithoutCustomerCampaignInput, {nullable:true})
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomerCampaignInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    connect?: CustomerWhereUniqueInput;
}
