import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';

@InputType()
export class EmployeeRoleWhereInput {

    @Field(() => [EmployeeRoleWhereInput], {nullable:true})
    AND?: Array<EmployeeRoleWhereInput>;

    @Field(() => [EmployeeRoleWhereInput], {nullable:true})
    OR?: Array<EmployeeRoleWhereInput>;

    @Field(() => [EmployeeRoleWhereInput], {nullable:true})
    NOT?: Array<EmployeeRoleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    employeeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    employee?: EmployeeRelationFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;
}
