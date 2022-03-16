import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskCreateWithoutCampaignInput } from './campaign-task-create-without-campaign.input';
import { CampaignTaskCreateOrConnectWithoutCampaignInput } from './campaign-task-create-or-connect-without-campaign.input';
import { CampaignTaskCreateManyCampaignInputEnvelope } from './campaign-task-create-many-campaign-input-envelope.input';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';

@InputType()
export class CampaignTaskCreateNestedManyWithoutCampaignInput {

    @Field(() => [CampaignTaskCreateWithoutCampaignInput], {nullable:true})
    create?: Array<CampaignTaskCreateWithoutCampaignInput>;

    @Field(() => [CampaignTaskCreateOrConnectWithoutCampaignInput], {nullable:true})
    connectOrCreate?: Array<CampaignTaskCreateOrConnectWithoutCampaignInput>;

    @Field(() => CampaignTaskCreateManyCampaignInputEnvelope, {nullable:true})
    createMany?: CampaignTaskCreateManyCampaignInputEnvelope;

    @Field(() => [CampaignTaskWhereUniqueInput], {nullable:true})
    connect?: Array<CampaignTaskWhereUniqueInput>;
}
