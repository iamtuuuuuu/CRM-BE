import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutCampaignStatusInput } from './campaign-create-without-campaign-status.input';
import { CampaignCreateOrConnectWithoutCampaignStatusInput } from './campaign-create-or-connect-without-campaign-status.input';
import { CampaignCreateManyCampaignStatusInputEnvelope } from './campaign-create-many-campaign-status-input-envelope.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';

@InputType()
export class CampaignCreateNestedManyWithoutCampaignStatusInput {

    @Field(() => [CampaignCreateWithoutCampaignStatusInput], {nullable:true})
    create?: Array<CampaignCreateWithoutCampaignStatusInput>;

    @Field(() => [CampaignCreateOrConnectWithoutCampaignStatusInput], {nullable:true})
    connectOrCreate?: Array<CampaignCreateOrConnectWithoutCampaignStatusInput>;

    @Field(() => CampaignCreateManyCampaignStatusInputEnvelope, {nullable:true})
    createMany?: CampaignCreateManyCampaignStatusInputEnvelope;

    @Field(() => [CampaignWhereUniqueInput], {nullable:true})
    connect?: Array<CampaignWhereUniqueInput>;
}
