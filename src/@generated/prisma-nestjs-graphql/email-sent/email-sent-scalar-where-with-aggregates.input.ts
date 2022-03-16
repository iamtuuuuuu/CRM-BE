import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class EmailSentScalarWhereWithAggregatesInput {

    @Field(() => [EmailSentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmailSentScalarWhereWithAggregatesInput>;

    @Field(() => [EmailSentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmailSentScalarWhereWithAggregatesInput>;

    @Field(() => [EmailSentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmailSentScalarWhereWithAggregatesInput>;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    customerId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    employeeId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;
}
