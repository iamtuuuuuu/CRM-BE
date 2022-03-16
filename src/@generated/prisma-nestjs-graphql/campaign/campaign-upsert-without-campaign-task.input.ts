import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignUpdateWithoutCampaignTaskInput } from './campaign-update-without-campaign-task.input';
import { CampaignCreateWithoutCampaignTaskInput } from './campaign-create-without-campaign-task.input';

@InputType()
export class CampaignUpsertWithoutCampaignTaskInput {

    @Field(() => CampaignUpdateWithoutCampaignTaskInput, {nullable:false})
    update!: CampaignUpdateWithoutCampaignTaskInput;

    @Field(() => CampaignCreateWithoutCampaignTaskInput, {nullable:false})
    create!: CampaignCreateWithoutCampaignTaskInput;
}
