import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class CustomerScalarWhereInput {

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    AND?: Array<CustomerScalarWhereInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    OR?: Array<CustomerScalarWhereInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    NOT?: Array<CustomerScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dob?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    gender?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    customerContactId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;
}
