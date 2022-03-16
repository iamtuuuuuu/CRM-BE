import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class CampaignTaskScalarWhereWithAggregatesInput {

    @Field(() => [CampaignTaskScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CampaignTaskScalarWhereWithAggregatesInput>;

    @Field(() => [CampaignTaskScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CampaignTaskScalarWhereWithAggregatesInput>;

    @Field(() => [CampaignTaskScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CampaignTaskScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    campaignId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    taskId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isDone?: BoolWithAggregatesFilter;
}
