import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CampaignRoleScalarWhereWithAggregatesInput {

    @Field(() => [CampaignRoleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CampaignRoleScalarWhereWithAggregatesInput>;

    @Field(() => [CampaignRoleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CampaignRoleScalarWhereWithAggregatesInput>;

    @Field(() => [CampaignRoleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CampaignRoleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    campaignId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    roleId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
