import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignStatusWhereInput } from './campaign-status-where.input';

@ArgsType()
export class DeleteManyCampaignStatusArgs {

    @Field(() => CampaignStatusWhereInput, {nullable:true})
    where?: CampaignStatusWhereInput;
}
