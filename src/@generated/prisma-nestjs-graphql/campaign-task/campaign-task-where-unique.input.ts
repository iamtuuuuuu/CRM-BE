import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskCampaignIdTaskIdCompoundUniqueInput } from './campaign-task-campaign-id-task-id-compound-unique.input';

@InputType()
export class CampaignTaskWhereUniqueInput {

    @Field(() => CampaignTaskCampaignIdTaskIdCompoundUniqueInput, {nullable:true})
    campaignId_taskId?: CampaignTaskCampaignIdTaskIdCompoundUniqueInput;
}
