import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CustomerOrderByRelationAggregateInput } from '../customer/customer-order-by-relation-aggregate.input';

@InputType()
export class CustomerContactOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ref?: keyof typeof SortOrder;

    @Field(() => CustomerOrderByRelationAggregateInput, {nullable:true})
    Customer?: CustomerOrderByRelationAggregateInput;
}
