import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignCreateInput } from './campaign-create.input';
import { CampaignUpdateInput } from './campaign-update.input';

@ArgsType()
export class UpsertOneCampaignArgs {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;

    @Field(() => CampaignCreateInput, {nullable:false})
    create!: CampaignCreateInput;

    @Field(() => CampaignUpdateInput, {nullable:false})
    update!: CampaignUpdateInput;
}
