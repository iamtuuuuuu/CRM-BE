import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignWhereInput } from './customer-campaign-where.input';

@InputType()
export class CustomerCampaignListRelationFilter {

    @Field(() => CustomerCampaignWhereInput, {nullable:true})
    every?: CustomerCampaignWhereInput;

    @Field(() => CustomerCampaignWhereInput, {nullable:true})
    some?: CustomerCampaignWhereInput;

    @Field(() => CustomerCampaignWhereInput, {nullable:true})
    none?: CustomerCampaignWhereInput;
}
