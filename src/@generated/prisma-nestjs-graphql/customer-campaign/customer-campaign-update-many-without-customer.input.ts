import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignCreateWithoutCustomerInput } from './customer-campaign-create-without-customer.input';
import { CustomerCampaignCreateOrConnectWithoutCustomerInput } from './customer-campaign-create-or-connect-without-customer.input';
import { CustomerCampaignUpsertWithWhereUniqueWithoutCustomerInput } from './customer-campaign-upsert-with-where-unique-without-customer.input';
import { CustomerCampaignCreateManyCustomerInputEnvelope } from './customer-campaign-create-many-customer-input-envelope.input';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';
import { CustomerCampaignUpdateWithWhereUniqueWithoutCustomerInput } from './customer-campaign-update-with-where-unique-without-customer.input';
import { CustomerCampaignUpdateManyWithWhereWithoutCustomerInput } from './customer-campaign-update-many-with-where-without-customer.input';
import { CustomerCampaignScalarWhereInput } from './customer-campaign-scalar-where.input';

@InputType()
export class CustomerCampaignUpdateManyWithoutCustomerInput {

    @Field(() => [CustomerCampaignCreateWithoutCustomerInput], {nullable:true})
    create?: Array<CustomerCampaignCreateWithoutCustomerInput>;

    @Field(() => [CustomerCampaignCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<CustomerCampaignCreateOrConnectWithoutCustomerInput>;

    @Field(() => [CustomerCampaignUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    upsert?: Array<CustomerCampaignUpsertWithWhereUniqueWithoutCustomerInput>;

    @Field(() => CustomerCampaignCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: CustomerCampaignCreateManyCustomerInputEnvelope;

    @Field(() => [CustomerCampaignWhereUniqueInput], {nullable:true})
    set?: Array<CustomerCampaignWhereUniqueInput>;

    @Field(() => [CustomerCampaignWhereUniqueInput], {nullable:true})
    disconnect?: Array<CustomerCampaignWhereUniqueInput>;

    @Field(() => [CustomerCampaignWhereUniqueInput], {nullable:true})
    delete?: Array<CustomerCampaignWhereUniqueInput>;

    @Field(() => [CustomerCampaignWhereUniqueInput], {nullable:true})
    connect?: Array<CustomerCampaignWhereUniqueInput>;

    @Field(() => [CustomerCampaignUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    update?: Array<CustomerCampaignUpdateWithWhereUniqueWithoutCustomerInput>;

    @Field(() => [CustomerCampaignUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    updateMany?: Array<CustomerCampaignUpdateManyWithWhereWithoutCustomerInput>;

    @Field(() => [CustomerCampaignScalarWhereInput], {nullable:true})
    deleteMany?: Array<CustomerCampaignScalarWhereInput>;
}
