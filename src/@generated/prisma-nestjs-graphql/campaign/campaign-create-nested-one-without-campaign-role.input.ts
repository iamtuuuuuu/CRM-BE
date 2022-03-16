import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutCampaignRoleInput } from './campaign-create-without-campaign-role.input';
import { CampaignCreateOrConnectWithoutCampaignRoleInput } from './campaign-create-or-connect-without-campaign-role.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';

@InputType()
export class CampaignCreateNestedOneWithoutCampaignRoleInput {

    @Field(() => CampaignCreateWithoutCampaignRoleInput, {nullable:true})
    create?: CampaignCreateWithoutCampaignRoleInput;

    @Field(() => CampaignCreateOrConnectWithoutCampaignRoleInput, {nullable:true})
    connectOrCreate?: CampaignCreateOrConnectWithoutCampaignRoleInput;

    @Field(() => CampaignWhereUniqueInput, {nullable:true})
    connect?: CampaignWhereUniqueInput;
}
