import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignWhereInput } from './campaign-where.input';

@InputType()
export class CampaignRelationFilter {

    @Field(() => CampaignWhereInput, {nullable:true})
    is?: CampaignWhereInput;

    @Field(() => CampaignWhereInput, {nullable:true})
    isNot?: CampaignWhereInput;
}
