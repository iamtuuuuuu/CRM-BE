import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutCampaignTaskInput } from './campaign-create-without-campaign-task.input';
import { CampaignCreateOrConnectWithoutCampaignTaskInput } from './campaign-create-or-connect-without-campaign-task.input';
import { CampaignUpsertWithoutCampaignTaskInput } from './campaign-upsert-without-campaign-task.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignUpdateWithoutCampaignTaskInput } from './campaign-update-without-campaign-task.input';

@InputType()
export class CampaignUpdateOneRequiredWithoutCampaignTaskInput {

    @Field(() => CampaignCreateWithoutCampaignTaskInput, {nullable:true})
    create?: CampaignCreateWithoutCampaignTaskInput;

    @Field(() => CampaignCreateOrConnectWithoutCampaignTaskInput, {nullable:true})
    connectOrCreate?: CampaignCreateOrConnectWithoutCampaignTaskInput;

    @Field(() => CampaignUpsertWithoutCampaignTaskInput, {nullable:true})
    upsert?: CampaignUpsertWithoutCampaignTaskInput;

    @Field(() => CampaignWhereUniqueInput, {nullable:true})
    connect?: CampaignWhereUniqueInput;

    @Field(() => CampaignUpdateWithoutCampaignTaskInput, {nullable:true})
    update?: CampaignUpdateWithoutCampaignTaskInput;
}
