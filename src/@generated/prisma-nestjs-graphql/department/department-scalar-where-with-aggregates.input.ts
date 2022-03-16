import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class DepartmentScalarWhereWithAggregatesInput {

    @Field(() => [DepartmentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DepartmentScalarWhereWithAggregatesInput>;

    @Field(() => [DepartmentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DepartmentScalarWhereWithAggregatesInput>;

    @Field(() => [DepartmentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DepartmentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
