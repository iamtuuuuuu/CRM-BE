import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignStatusWhereUniqueInput } from './campaign-status-where-unique.input';

@ArgsType()
export class FindUniqueCampaignStatusArgs {

    @Field(() => CampaignStatusWhereUniqueInput, {nullable:false})
    where!: CampaignStatusWhereUniqueInput;
}
