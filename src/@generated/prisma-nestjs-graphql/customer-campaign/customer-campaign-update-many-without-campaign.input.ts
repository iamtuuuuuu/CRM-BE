import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignCreateWithoutCampaignInput } from './customer-campaign-create-without-campaign.input';
import { CustomerCampaignCreateOrConnectWithoutCampaignInput } from './customer-campaign-create-or-connect-without-campaign.input';
import { CustomerCampaignUpsertWithWhereUniqueWithoutCampaignInput } from './customer-campaign-upsert-with-where-unique-without-campaign.input';
import { CustomerCampaignCreateManyCampaignInputEnvelope } from './customer-campaign-create-many-campaign-input-envelope.input';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';
import { CustomerCampaignUpdateWithWhereUniqueWithoutCampaignInput } from './customer-campaign-update-with-where-unique-without-campaign.input';
import { CustomerCampaignUpdateManyWithWhereWithoutCampaignInput } from './customer-campaign-update-many-with-where-without-campaign.input';
import { CustomerCampaignScalarWhereInput } from './customer-campaign-scalar-where.input';

@InputType()
export class CustomerCampaignUpdateManyWithoutCampaignInput {

    @Field(() => [CustomerCampaignCreateWithoutCampaignInput], {nullable:true})
    create?: Array<CustomerCampaignCreateWithoutCampaignInput>;

    @Field(() => [CustomerCampaignCreateOrConnectWithoutCampaignInput], {nullable:true})
    connectOrCreate?: Array<CustomerCampaignCreateOrConnectWithoutCampaignInput>;

    @Field(() => [CustomerCampaignUpsertWithWhereUniqueWithoutCampaignInput], {nullable:true})
    upsert?: Array<CustomerCampaignUpsertWithWhereUniqueWithoutCampaignInput>;

    @Field(() => CustomerCampaignCreateManyCampaignInputEnvelope, {nullable:true})
    createMany?: CustomerCampaignCreateManyCampaignInputEnvelope;

    @Field(() => [CustomerCampaignWhereUniqueInput], {nullable:true})
    set?: Array<CustomerCampaignWhereUniqueInput>;

    @Field(() => [CustomerCampaignWhereUniqueInput], {nullable:true})
    disconnect?: Array<CustomerCampaignWhereUniqueInput>;

    @Field(() => [CustomerCampaignWhereUniqueInput], {nullable:true})
    delete?: Array<CustomerCampaignWhereUniqueInput>;

    @Field(() => [CustomerCampaignWhereUniqueInput], {nullable:true})
    connect?: Array<CustomerCampaignWhereUniqueInput>;

    @Field(() => [CustomerCampaignUpdateWithWhereUniqueWithoutCampaignInput], {nullable:true})
    update?: Array<CustomerCampaignUpdateWithWhereUniqueWithoutCampaignInput>;

    @Field(() => [CustomerCampaignUpdateManyWithWhereWithoutCampaignInput], {nullable:true})
    updateMany?: Array<CustomerCampaignUpdateManyWithWhereWithoutCampaignInput>;

    @Field(() => [CustomerCampaignScalarWhereInput], {nullable:true})
    deleteMany?: Array<CustomerCampaignScalarWhereInput>;
}
