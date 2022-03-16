import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';
import { CampaignTaskUpdateWithoutCampaignInput } from './campaign-task-update-without-campaign.input';
import { CampaignTaskCreateWithoutCampaignInput } from './campaign-task-create-without-campaign.input';

@InputType()
export class CampaignTaskUpsertWithWhereUniqueWithoutCampaignInput {

    @Field(() => CampaignTaskWhereUniqueInput, {nullable:false})
    where!: CampaignTaskWhereUniqueInput;

    @Field(() => CampaignTaskUpdateWithoutCampaignInput, {nullable:false})
    update!: CampaignTaskUpdateWithoutCampaignInput;

    @Field(() => CampaignTaskCreateWithoutCampaignInput, {nullable:false})
    create!: CampaignTaskCreateWithoutCampaignInput;
}
