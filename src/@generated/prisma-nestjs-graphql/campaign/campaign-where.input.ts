import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { CampaignStatusRelationFilter } from '../campaign-status/campaign-status-relation-filter.input';
import { CampaignRoleListRelationFilter } from '../campaign-role/campaign-role-list-relation-filter.input';
import { CampaignTaskListRelationFilter } from '../campaign-task/campaign-task-list-relation-filter.input';
import { CustomerCampaignListRelationFilter } from '../customer-campaign/customer-campaign-list-relation-filter.input';

@InputType()
export class CampaignWhereInput {

    @Field(() => [CampaignWhereInput], {nullable:true})
    AND?: Array<CampaignWhereInput>;

    @Field(() => [CampaignWhereInput], {nullable:true})
    OR?: Array<CampaignWhereInput>;

    @Field(() => [CampaignWhereInput], {nullable:true})
    NOT?: Array<CampaignWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    campaignStatusId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    linkImg?: StringNullableFilter;

    @Field(() => CampaignStatusRelationFilter, {nullable:true})
    campaignStatus?: CampaignStatusRelationFilter;

    @Field(() => CampaignRoleListRelationFilter, {nullable:true})
    CampaignRole?: CampaignRoleListRelationFilter;

    @Field(() => CampaignTaskListRelationFilter, {nullable:true})
    CampaignTask?: CampaignTaskListRelationFilter;

    @Field(() => CustomerCampaignListRelationFilter, {nullable:true})
    CustomerCampaign?: CustomerCampaignListRelationFilter;
}
