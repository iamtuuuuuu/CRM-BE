import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignCreateWithoutCampaignInput } from './customer-campaign-create-without-campaign.input';
import { CustomerCampaignCreateOrConnectWithoutCampaignInput } from './customer-campaign-create-or-connect-without-campaign.input';
import { CustomerCampaignCreateManyCampaignInputEnvelope } from './customer-campaign-create-many-campaign-input-envelope.input';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';

@InputType()
export class CustomerCampaignCreateNestedManyWithoutCampaignInput {

    @Field(() => [CustomerCampaignCreateWithoutCampaignInput], {nullable:true})
    create?: Array<CustomerCampaignCreateWithoutCampaignInput>;

    @Field(() => [CustomerCampaignCreateOrConnectWithoutCampaignInput], {nullable:true})
    connectOrCreate?: Array<CustomerCampaignCreateOrConnectWithoutCampaignInput>;

    @Field(() => CustomerCampaignCreateManyCampaignInputEnvelope, {nullable:true})
    createMany?: CustomerCampaignCreateManyCampaignInputEnvelope;

    @Field(() => [CustomerCampaignWhereUniqueInput], {nullable:true})
    connect?: Array<CustomerCampaignWhereUniqueInput>;
}
