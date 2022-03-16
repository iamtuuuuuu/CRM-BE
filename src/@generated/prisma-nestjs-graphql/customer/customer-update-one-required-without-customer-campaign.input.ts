import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutCustomerCampaignInput } from './customer-create-without-customer-campaign.input';
import { CustomerCreateOrConnectWithoutCustomerCampaignInput } from './customer-create-or-connect-without-customer-campaign.input';
import { CustomerUpsertWithoutCustomerCampaignInput } from './customer-upsert-without-customer-campaign.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithoutCustomerCampaignInput } from './customer-update-without-customer-campaign.input';

@InputType()
export class CustomerUpdateOneRequiredWithoutCustomerCampaignInput {

    @Field(() => CustomerCreateWithoutCustomerCampaignInput, {nullable:true})
    create?: CustomerCreateWithoutCustomerCampaignInput;

    @Field(() => CustomerCreateOrConnectWithoutCustomerCampaignInput, {nullable:true})
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomerCampaignInput;

    @Field(() => CustomerUpsertWithoutCustomerCampaignInput, {nullable:true})
    upsert?: CustomerUpsertWithoutCustomerCampaignInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    connect?: CustomerWhereUniqueInput;

    @Field(() => CustomerUpdateWithoutCustomerCampaignInput, {nullable:true})
    update?: CustomerUpdateWithoutCustomerCampaignInput;
}
