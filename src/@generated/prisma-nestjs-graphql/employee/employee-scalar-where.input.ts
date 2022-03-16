import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class EmployeeScalarWhereInput {

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    AND?: Array<EmployeeScalarWhereInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    OR?: Array<EmployeeScalarWhereInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    NOT?: Array<EmployeeScalarWhereInput>;

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
}
