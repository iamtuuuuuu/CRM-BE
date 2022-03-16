import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';

@ArgsType()
export class DeleteOneCampaignArgs {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;
}
