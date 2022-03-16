import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductTaskScalarWhereWithAggregatesInput {

    @Field(() => [ProductTaskScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductTaskScalarWhereWithAggregatesInput>;

    @Field(() => [ProductTaskScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductTaskScalarWhereWithAggregatesInput>;

    @Field(() => [ProductTaskScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductTaskScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    productId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    taskId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
