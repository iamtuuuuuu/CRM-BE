import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignWhereInput } from './campaign-where.input';

@ArgsType()
export class DeleteManyCampaignArgs {

    @Field(() => CampaignWhereInput, {nullable:true})
    where?: CampaignWhereInput;
}
