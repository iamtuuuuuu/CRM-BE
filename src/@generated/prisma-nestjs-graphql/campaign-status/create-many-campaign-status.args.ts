import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignStatusCreateManyInput } from './campaign-status-create-many.input';

@ArgsType()
export class CreateManyCampaignStatusArgs {

    @Field(() => [CampaignStatusCreateManyInput], {nullable:false})
    data!: Array<CampaignStatusCreateManyInput>;
}
