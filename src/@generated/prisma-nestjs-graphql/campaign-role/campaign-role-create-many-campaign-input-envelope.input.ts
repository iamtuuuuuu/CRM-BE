import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleCreateManyCampaignInput } from './campaign-role-create-many-campaign.input';

@InputType()
export class CampaignRoleCreateManyCampaignInputEnvelope {

    @Field(() => [CampaignRoleCreateManyCampaignInput], {nullable:false})
    data!: Array<CampaignRoleCreateManyCampaignInput>;
}
