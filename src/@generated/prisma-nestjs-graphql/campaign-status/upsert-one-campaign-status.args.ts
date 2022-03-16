import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignStatusWhereUniqueInput } from './campaign-status-where-unique.input';
import { CampaignStatusCreateInput } from './campaign-status-create.input';
import { CampaignStatusUpdateInput } from './campaign-status-update.input';

@ArgsType()
export class UpsertOneCampaignStatusArgs {

    @Field(() => CampaignStatusWhereUniqueInput, {nullable:false})
    where!: CampaignStatusWhereUniqueInput;

    @Field(() => CampaignStatusCreateInput, {nullable:false})
    create!: CampaignStatusCreateInput;

    @Field(() => CampaignStatusUpdateInput, {nullable:false})
    update!: CampaignStatusUpdateInput;
}
