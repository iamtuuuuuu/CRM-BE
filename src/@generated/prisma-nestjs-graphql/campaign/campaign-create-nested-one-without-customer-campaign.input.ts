import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutCustomerCampaignInput } from './campaign-create-without-customer-campaign.input';
import { CampaignCreateOrConnectWithoutCustomerCampaignInput } from './campaign-create-or-connect-without-customer-campaign.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';

@InputType()
export class CampaignCreateNestedOneWithoutCustomerCampaignInput {

    @Field(() => CampaignCreateWithoutCustomerCampaignInput, {nullable:true})
    create?: CampaignCreateWithoutCustomerCampaignInput;

    @Field(() => CampaignCreateOrConnectWithoutCustomerCampaignInput, {nullable:true})
    connectOrCreate?: CampaignCreateOrConnectWithoutCustomerCampaignInput;

    @Field(() => CampaignWhereUniqueInput, {nullable:true})
    connect?: CampaignWhereUniqueInput;
}
