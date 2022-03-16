import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignCreateWithoutCampaignRoleInput } from './campaign-create-without-campaign-role.input';

@InputType()
export class CampaignCreateOrConnectWithoutCampaignRoleInput {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;

    @Field(() => CampaignCreateWithoutCampaignRoleInput, {nullable:false})
    create!: CampaignCreateWithoutCampaignRoleInput;
}
