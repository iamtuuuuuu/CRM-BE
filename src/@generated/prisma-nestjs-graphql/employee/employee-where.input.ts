import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DepartmentRelationFilter } from '../department/department-relation-filter.input';
import { EmailSentListRelationFilter } from '../email-sent/email-sent-list-relation-filter.input';
import { EmployeeRoleListRelationFilter } from '../employee-role/employee-role-list-relation-filter.input';
import { ProblemListRelationFilter } from '../problem/problem-list-relation-filter.input';

@InputType()
export class EmployeeWhereInput {

    @Field(() => [EmployeeWhereInput], {nullable:true})
    AND?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    OR?: Array<EmployeeWhereInput>;

    @Field(() => [EmployeeWhereInput], {nullable:true})
    NOT?: Array<EmployeeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    status?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    departmentId?: IntNullableFilter;

    @Field(() => DepartmentRelationFilter, {nullable:true})
    department?: DepartmentRelationFilter;

    @Field(() => EmailSentListRelationFilter, {nullable:true})
    EmailSent?: EmailSentListRelationFilter;

    @Field(() => EmployeeRoleListRelationFilter, {nullable:true})
    EmployeeRole?: EmployeeRoleListRelationFilter;

    @Field(() => ProblemListRelationFilter, {nullable:true})
    Problem?: ProblemListRelationFilter;
}
