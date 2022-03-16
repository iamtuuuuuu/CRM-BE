import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CustomerRelationFilter } from '../customer/customer-relation-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';

@InputType()
export class ProblemWhereInput {

    @Field(() => [ProblemWhereInput], {nullable:true})
    AND?: Array<ProblemWhereInput>;

    @Field(() => [ProblemWhereInput], {nullable:true})
    OR?: Array<ProblemWhereInput>;

    @Field(() => [ProblemWhereInput], {nullable:true})
    NOT?: Array<ProblemWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    note?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    customerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    employeeId?: IntFilter;

    @Field(() => CustomerRelationFilter, {nullable:true})
    customer?: CustomerRelationFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    employee?: EmployeeRelationFilter;
}
