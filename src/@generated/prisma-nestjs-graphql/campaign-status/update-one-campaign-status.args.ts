import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignStatusUpdateInput } from './campaign-status-update.input';
import { CampaignStatusWhereUniqueInput } from './campaign-status-where-unique.input';

@ArgsType()
export class UpdateOneCampaignStatusArgs {

    @Field(() => CampaignStatusUpdateInput, {nullable:false})
    data!: CampaignStatusUpdateInput;

    @Field(() => CampaignStatusWhereUniqueInput, {nullable:false})
    where!: CampaignStatusWhereUniqueInput;
}
