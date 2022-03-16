import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleCreateWithoutCampaignInput } from './campaign-role-create-without-campaign.input';
import { CampaignRoleCreateOrConnectWithoutCampaignInput } from './campaign-role-create-or-connect-without-campaign.input';
import { CampaignRoleCreateManyCampaignInputEnvelope } from './campaign-role-create-many-campaign-input-envelope.input';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';

@InputType()
export class CampaignRoleUncheckedCreateNestedManyWithoutCampaignInput {

    @Field(() => [CampaignRoleCreateWithoutCampaignInput], {nullable:true})
    create?: Array<CampaignRoleCreateWithoutCampaignInput>;

    @Field(() => [CampaignRoleCreateOrConnectWithoutCampaignInput], {nullable:true})
    connectOrCreate?: Array<CampaignRoleCreateOrConnectWithoutCampaignInput>;

    @Field(() => CampaignRoleCreateManyCampaignInputEnvelope, {nullable:true})
    createMany?: CampaignRoleCreateManyCampaignInputEnvelope;

    @Field(() => [CampaignRoleWhereUniqueInput], {nullable:true})
    connect?: Array<CampaignRoleWhereUniqueInput>;
}
