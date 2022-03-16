import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignCreateInput } from './campaign-create.input';

@ArgsType()
export class CreateOneCampaignArgs {

    @Field(() => CampaignCreateInput, {nullable:false})
    data!: CampaignCreateInput;
}
