import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProblemScalarWhereInput {

    @Field(() => [ProblemScalarWhereInput], {nullable:true})
    AND?: Array<ProblemScalarWhereInput>;

    @Field(() => [ProblemScalarWhereInput], {nullable:true})
    OR?: Array<ProblemScalarWhereInput>;

    @Field(() => [ProblemScalarWhereInput], {nullable:true})
    NOT?: Array<ProblemScalarWhereInput>;

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
}
