import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CampaignRelationFilter } from '../campaign/campaign-relation-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';

@InputType()
export class CampaignRoleWhereInput {

    @Field(() => [CampaignRoleWhereInput], {nullable:true})
    AND?: Array<CampaignRoleWhereInput>;

    @Field(() => [CampaignRoleWhereInput], {nullable:true})
    OR?: Array<CampaignRoleWhereInput>;

    @Field(() => [CampaignRoleWhereInput], {nullable:true})
    NOT?: Array<CampaignRoleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    campaignId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CampaignRelationFilter, {nullable:true})
    campaign?: CampaignRelationFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;
}
