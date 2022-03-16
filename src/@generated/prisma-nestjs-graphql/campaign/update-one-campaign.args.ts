import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignUpdateInput } from './campaign-update.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';

@ArgsType()
export class UpdateOneCampaignArgs {

    @Field(() => CampaignUpdateInput, {nullable:false})
    data!: CampaignUpdateInput;

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;
}
