import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class CustomerCampaignScalarWhereWithAggregatesInput {

    @Field(() => [CustomerCampaignScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CustomerCampaignScalarWhereWithAggregatesInput>;

    @Field(() => [CustomerCampaignScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CustomerCampaignScalarWhereWithAggregatesInput>;

    @Field(() => [CustomerCampaignScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CustomerCampaignScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    customerId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    campaignId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    note?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;
}
