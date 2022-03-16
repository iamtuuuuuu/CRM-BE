import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { CustomerOrderByWithAggregationInput } from './customer-order-by-with-aggregation.input';
import { CustomerScalarFieldEnum } from './customer-scalar-field.enum';
import { CustomerScalarWhereWithAggregatesInput } from './customer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CustomerCountAggregateInput } from './customer-count-aggregate.input';
import { CustomerAvgAggregateInput } from './customer-avg-aggregate.input';
import { CustomerSumAggregateInput } from './customer-sum-aggregate.input';
import { CustomerMinAggregateInput } from './customer-min-aggregate.input';
import { CustomerMaxAggregateInput } from './customer-max-aggregate.input';

@ArgsType()
export class CustomerGroupByArgs {

    @Field(() => CustomerWhereInput, {nullable:true})
    where?: CustomerWhereInput;

    @Field(() => [CustomerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CustomerOrderByWithAggregationInput>;

    @Field(() => [CustomerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CustomerScalarFieldEnum>;

    @Field(() => CustomerScalarWhereWithAggregatesInput, {nullable:true})
    having?: CustomerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CustomerCountAggregateInput, {nullable:true})
    _count?: CustomerCountAggregateInput;

    @Field(() => CustomerAvgAggregateInput, {nullable:true})
    _avg?: CustomerAvgAggregateInput;

    @Field(() => CustomerSumAggregateInput, {nullable:true})
    _sum?: CustomerSumAggregateInput;

    @Field(() => CustomerMinAggregateInput, {nullable:true})
    _min?: CustomerMinAggregateInput;

    @Field(() => CustomerMaxAggregateInput, {nullable:true})
    _max?: CustomerMaxAggregateInput;
}
