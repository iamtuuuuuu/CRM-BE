import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutCampaignRoleInput } from './campaign-create-without-campaign-role.input';
import { CampaignCreateOrConnectWithoutCampaignRoleInput } from './campaign-create-or-connect-without-campaign-role.input';
import { CampaignUpsertWithoutCampaignRoleInput } from './campaign-upsert-without-campaign-role.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignUpdateWithoutCampaignRoleInput } from './campaign-update-without-campaign-role.input';

@InputType()
export class CampaignUpdateOneRequiredWithoutCampaignRoleInput {

    @Field(() => CampaignCreateWithoutCampaignRoleInput, {nullable:true})
    create?: CampaignCreateWithoutCampaignRoleInput;

    @Field(() => CampaignCreateOrConnectWithoutCampaignRoleInput, {nullable:true})
    connectOrCreate?: CampaignCreateOrConnectWithoutCampaignRoleInput;

    @Field(() => CampaignUpsertWithoutCampaignRoleInput, {nullable:true})
    upsert?: CampaignUpsertWithoutCampaignRoleInput;

    @Field(() => CampaignWhereUniqueInput, {nullable:true})
    connect?: CampaignWhereUniqueInput;

    @Field(() => CampaignUpdateWithoutCampaignRoleInput, {nullable:true})
    update?: CampaignUpdateWithoutCampaignRoleInput;
}
