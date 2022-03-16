import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CustomerCountOrderByAggregateInput } from './customer-count-order-by-aggregate.input';
import { CustomerAvgOrderByAggregateInput } from './customer-avg-order-by-aggregate.input';
import { CustomerMaxOrderByAggregateInput } from './customer-max-order-by-aggregate.input';
import { CustomerMinOrderByAggregateInput } from './customer-min-order-by-aggregate.input';
import { CustomerSumOrderByAggregateInput } from './customer-sum-order-by-aggregate.input';

@InputType()
export class CustomerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dob?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerContactId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => CustomerCountOrderByAggregateInput, {nullable:true})
    _count?: CustomerCountOrderByAggregateInput;

    @Field(() => CustomerAvgOrderByAggregateInput, {nullable:true})
    _avg?: CustomerAvgOrderByAggregateInput;

    @Field(() => CustomerMaxOrderByAggregateInput, {nullable:true})
    _max?: CustomerMaxOrderByAggregateInput;

    @Field(() => CustomerMinOrderByAggregateInput, {nullable:true})
    _min?: CustomerMinOrderByAggregateInput;

    @Field(() => CustomerSumOrderByAggregateInput, {nullable:true})
    _sum?: CustomerSumOrderByAggregateInput;
}
