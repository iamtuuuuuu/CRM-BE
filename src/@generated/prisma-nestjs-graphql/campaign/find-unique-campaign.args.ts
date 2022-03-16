import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';

@ArgsType()
export class FindUniqueCampaignArgs {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;
}
