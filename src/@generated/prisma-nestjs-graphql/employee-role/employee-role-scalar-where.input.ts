import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EmployeeRoleScalarWhereInput {

    @Field(() => [EmployeeRoleScalarWhereInput], {nullable:true})
    AND?: Array<EmployeeRoleScalarWhereInput>;

    @Field(() => [EmployeeRoleScalarWhereInput], {nullable:true})
    OR?: Array<EmployeeRoleScalarWhereInput>;

    @Field(() => [EmployeeRoleScalarWhereInput], {nullable:true})
    NOT?: Array<EmployeeRoleScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    employeeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
