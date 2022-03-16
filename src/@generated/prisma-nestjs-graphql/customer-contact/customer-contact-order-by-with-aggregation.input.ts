import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CustomerContactCountOrderByAggregateInput } from './customer-contact-count-order-by-aggregate.input';
import { CustomerContactAvgOrderByAggregateInput } from './customer-contact-avg-order-by-aggregate.input';
import { CustomerContactMaxOrderByAggregateInput } from './customer-contact-max-order-by-aggregate.input';
import { CustomerContactMinOrderByAggregateInput } from './customer-contact-min-order-by-aggregate.input';
import { CustomerContactSumOrderByAggregateInput } from './customer-contact-sum-order-by-aggregate.input';

@InputType()
export class CustomerContactOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ref?: keyof typeof SortOrder;

    @Field(() => CustomerContactCountOrderByAggregateInput, {nullable:true})
    _count?: CustomerContactCountOrderByAggregateInput;

    @Field(() => CustomerContactAvgOrderByAggregateInput, {nullable:true})
    _avg?: CustomerContactAvgOrderByAggregateInput;

    @Field(() => CustomerContactMaxOrderByAggregateInput, {nullable:true})
    _max?: CustomerContactMaxOrderByAggregateInput;

    @Field(() => CustomerContactMinOrderByAggregateInput, {nullable:true})
    _min?: CustomerContactMinOrderByAggregateInput;

    @Field(() => CustomerContactSumOrderByAggregateInput, {nullable:true})
    _sum?: CustomerContactSumOrderByAggregateInput;
}
