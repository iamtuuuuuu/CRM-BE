import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateManyParentInput } from './campaign-create-many-parent.input';

@InputType()
export class CampaignCreateManyParentInputEnvelope {

    @Field(() => [CampaignCreateManyParentInput], {nullable:false})
    data!: Array<CampaignCreateManyParentInput>;
}
