import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskCreateManyCampaignInput } from './campaign-task-create-many-campaign.input';

@InputType()
export class CampaignTaskCreateManyCampaignInputEnvelope {

    @Field(() => [CampaignTaskCreateManyCampaignInput], {nullable:false})
    data!: Array<CampaignTaskCreateManyCampaignInput>;
}
