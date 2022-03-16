import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignWhereInput } from './campaign-where.input';

@InputType()
export class CampaignListRelationFilter {

    @Field(() => CampaignWhereInput, {nullable:true})
    every?: CampaignWhereInput;

    @Field(() => CampaignWhereInput, {nullable:true})
    some?: CampaignWhereInput;

    @Field(() => CampaignWhereInput, {nullable:true})
    none?: CampaignWhereInput;
}
