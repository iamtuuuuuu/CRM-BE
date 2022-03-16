import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignCreateManyCampaignInput } from './customer-campaign-create-many-campaign.input';

@InputType()
export class CustomerCampaignCreateManyCampaignInputEnvelope {

    @Field(() => [CustomerCampaignCreateManyCampaignInput], {nullable:false})
    data!: Array<CustomerCampaignCreateManyCampaignInput>;
}
