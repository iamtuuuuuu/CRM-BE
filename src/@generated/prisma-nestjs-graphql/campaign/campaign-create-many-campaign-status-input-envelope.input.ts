import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateManyCampaignStatusInput } from './campaign-create-many-campaign-status.input';

@InputType()
export class CampaignCreateManyCampaignStatusInputEnvelope {

    @Field(() => [CampaignCreateManyCampaignStatusInput], {nullable:false})
    data!: Array<CampaignCreateManyCampaignStatusInput>;
}
