import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutCampaignTaskInput } from './campaign-create-without-campaign-task.input';
import { CampaignCreateOrConnectWithoutCampaignTaskInput } from './campaign-create-or-connect-without-campaign-task.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';

@InputType()
export class CampaignCreateNestedOneWithoutCampaignTaskInput {

    @Field(() => CampaignCreateWithoutCampaignTaskInput, {nullable:true})
    create?: CampaignCreateWithoutCampaignTaskInput;

    @Field(() => CampaignCreateOrConnectWithoutCampaignTaskInput, {nullable:true})
    connectOrCreate?: CampaignCreateOrConnectWithoutCampaignTaskInput;

    @Field(() => CampaignWhereUniqueInput, {nullable:true})
    connect?: CampaignWhereUniqueInput;
}
