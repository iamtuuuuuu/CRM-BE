import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignCreateManyInput } from './campaign-create-many.input';

@ArgsType()
export class CreateManyCampaignArgs {

    @Field(() => [CampaignCreateManyInput], {nullable:false})
    data!: Array<CampaignCreateManyInput>;
}
