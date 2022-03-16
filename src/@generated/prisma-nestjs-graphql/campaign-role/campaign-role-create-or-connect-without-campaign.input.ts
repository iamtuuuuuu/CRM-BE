import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';
import { CampaignRoleCreateWithoutCampaignInput } from './campaign-role-create-without-campaign.input';

@InputType()
export class CampaignRoleCreateOrConnectWithoutCampaignInput {

    @Field(() => CampaignRoleWhereUniqueInput, {nullable:false})
    where!: CampaignRoleWhereUniqueInput;

    @Field(() => CampaignRoleCreateWithoutCampaignInput, {nullable:false})
    create!: CampaignRoleCreateWithoutCampaignInput;
}
