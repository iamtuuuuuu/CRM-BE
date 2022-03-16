import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class EmployeeRoleScalarWhereWithAggregatesInput {

    @Field(() => [EmployeeRoleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmployeeRoleScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeeRoleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmployeeRoleScalarWhereWithAggregatesInput>;

    @Field(() => [EmployeeRoleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmployeeRoleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    employeeId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    roleId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
