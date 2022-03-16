import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignStatusWhereInput } from './campaign-status-where.input';

@InputType()
export class CampaignStatusRelationFilter {

    @Field(() => CampaignStatusWhereInput, {nullable:true})
    is?: CampaignStatusWhereInput;

    @Field(() => CampaignStatusWhereInput, {nullable:true})
    isNot?: CampaignStatusWhereInput;
}
