import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class CustomerContactScalarWhereWithAggregatesInput {

    @Field(() => [CustomerContactScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CustomerContactScalarWhereWithAggregatesInput>;

    @Field(() => [CustomerContactScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CustomerContactScalarWhereWithAggregatesInput>;

    @Field(() => [CustomerContactScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CustomerContactScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ref?: StringNullableWithAggregatesFilter;
}
