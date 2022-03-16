import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignStatusCreateInput } from './campaign-status-create.input';

@ArgsType()
export class CreateOneCampaignStatusArgs {

    @Field(() => CampaignStatusCreateInput, {nullable:false})
    data!: CampaignStatusCreateInput;
}
