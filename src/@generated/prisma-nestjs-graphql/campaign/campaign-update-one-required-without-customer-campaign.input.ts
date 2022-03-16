import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutCustomerCampaignInput } from './campaign-create-without-customer-campaign.input';
import { CampaignCreateOrConnectWithoutCustomerCampaignInput } from './campaign-create-or-connect-without-customer-campaign.input';
import { CampaignUpsertWithoutCustomerCampaignInput } from './campaign-upsert-without-customer-campaign.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignUpdateWithoutCustomerCampaignInput } from './campaign-update-without-customer-campaign.input';

@InputType()
export class CampaignUpdateOneRequiredWithoutCustomerCampaignInput {

    @Field(() => CampaignCreateWithoutCustomerCampaignInput, {nullable:true})
    create?: CampaignCreateWithoutCustomerCampaignInput;

    @Field(() => CampaignCreateOrConnectWithoutCustomerCampaignInput, {nullable:true})
    connectOrCreate?: CampaignCreateOrConnectWithoutCustomerCampaignInput;

    @Field(() => CampaignUpsertWithoutCustomerCampaignInput, {nullable:true})
    upsert?: CampaignUpsertWithoutCustomerCampaignInput;

    @Field(() => CampaignWhereUniqueInput, {nullable:true})
    connect?: CampaignWhereUniqueInput;

    @Field(() => CampaignUpdateWithoutCustomerCampaignInput, {nullable:true})
    update?: CampaignUpdateWithoutCustomerCampaignInput;
}
