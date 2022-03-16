import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CampaignRoleListRelationFilter } from '../campaign-role/campaign-role-list-relation-filter.input';
import { EmployeeRoleListRelationFilter } from '../employee-role/employee-role-list-relation-filter.input';

@InputType()
export class RoleWhereInput {

    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    role?: StringFilter;

    @Field(() => CampaignRoleListRelationFilter, {nullable:true})
    CampaignRole?: CampaignRoleListRelationFilter;

    @Field(() => EmployeeRoleListRelationFilter, {nullable:true})
    EmployeeRole?: EmployeeRoleListRelationFilter;
}
