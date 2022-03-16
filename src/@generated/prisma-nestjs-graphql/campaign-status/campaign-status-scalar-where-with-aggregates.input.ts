import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CampaignStatusScalarWhereWithAggregatesInput {

    @Field(() => [CampaignStatusScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CampaignStatusScalarWhereWithAggregatesInput>;

    @Field(() => [CampaignStatusScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CampaignStatusScalarWhereWithAggregatesInput>;

    @Field(() => [CampaignStatusScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CampaignStatusScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;
}
