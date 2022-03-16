import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';
import { CampaignTaskUpdateWithoutCampaignInput } from './campaign-task-update-without-campaign.input';

@InputType()
export class CampaignTaskUpdateWithWhereUniqueWithoutCampaignInput {

    @Field(() => CampaignTaskWhereUniqueInput, {nullable:false})
    where!: CampaignTaskWhereUniqueInput;

    @Field(() => CampaignTaskUpdateWithoutCampaignInput, {nullable:false})
    data!: CampaignTaskUpdateWithoutCampaignInput;
}
