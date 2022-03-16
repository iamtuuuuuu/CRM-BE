import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignCreateWithoutCustomerInput } from './customer-campaign-create-without-customer.input';
import { CustomerCampaignCreateOrConnectWithoutCustomerInput } from './customer-campaign-create-or-connect-without-customer.input';
import { CustomerCampaignCreateManyCustomerInputEnvelope } from './customer-campaign-create-many-customer-input-envelope.input';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';

@InputType()
export class CustomerCampaignUncheckedCreateNestedManyWithoutCustomerInput {

    @Field(() => [CustomerCampaignCreateWithoutCustomerInput], {nullable:true})
    create?: Array<CustomerCampaignCreateWithoutCustomerInput>;

    @Field(() => [CustomerCampaignCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<CustomerCampaignCreateOrConnectWithoutCustomerInput>;

    @Field(() => CustomerCampaignCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: CustomerCampaignCreateManyCustomerInputEnvelope;

    @Field(() => [CustomerCampaignWhereUniqueInput], {nullable:true})
    connect?: Array<CustomerCampaignWhereUniqueInput>;
}
