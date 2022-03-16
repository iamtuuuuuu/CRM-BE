import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EmailSentCountOrderByAggregateInput } from './email-sent-count-order-by-aggregate.input';
import { EmailSentAvgOrderByAggregateInput } from './email-sent-avg-order-by-aggregate.input';
import { EmailSentMaxOrderByAggregateInput } from './email-sent-max-order-by-aggregate.input';
import { EmailSentMinOrderByAggregateInput } from './email-sent-min-order-by-aggregate.input';
import { EmailSentSumOrderByAggregateInput } from './email-sent-sum-order-by-aggregate.input';

@InputType()
export class EmailSentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => EmailSentCountOrderByAggregateInput, {nullable:true})
    _count?: EmailSentCountOrderByAggregateInput;

    @Field(() => EmailSentAvgOrderByAggregateInput, {nullable:true})
    _avg?: EmailSentAvgOrderByAggregateInput;

    @Field(() => EmailSentMaxOrderByAggregateInput, {nullable:true})
    _max?: EmailSentMaxOrderByAggregateInput;

    @Field(() => EmailSentMinOrderByAggregateInput, {nullable:true})
    _min?: EmailSentMinOrderByAggregateInput;

    @Field(() => EmailSentSumOrderByAggregateInput, {nullable:true})
    _sum?: EmailSentSumOrderByAggregateInput;
}
