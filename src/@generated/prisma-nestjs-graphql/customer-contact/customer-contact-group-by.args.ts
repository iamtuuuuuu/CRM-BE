import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerContactWhereInput } from './customer-contact-where.input';
import { CustomerContactOrderByWithAggregationInput } from './customer-contact-order-by-with-aggregation.input';
import { CustomerContactScalarFieldEnum } from './customer-contact-scalar-field.enum';
import { CustomerContactScalarWhereWithAggregatesInput } from './customer-contact-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CustomerContactCountAggregateInput } from './customer-contact-count-aggregate.input';
import { CustomerContactAvgAggregateInput } from './customer-contact-avg-aggregate.input';
import { CustomerContactSumAggregateInput } from './customer-contact-sum-aggregate.input';
import { CustomerContactMinAggregateInput } from './customer-contact-min-aggregate.input';
import { CustomerContactMaxAggregateInput } from './customer-contact-max-aggregate.input';

@ArgsType()
export class CustomerContactGroupByArgs {

    @Field(() => CustomerContactWhereInput, {nullable:true})
    where?: CustomerContactWhereInput;

    @Field(() => [CustomerContactOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CustomerContactOrderByWithAggregationInput>;

    @Field(() => [CustomerContactScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CustomerContactScalarFieldEnum>;

    @Field(() => CustomerContactScalarWhereWithAggregatesInput, {nullable:true})
    having?: CustomerContactScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CustomerContactCountAggregateInput, {nullable:true})
    _count?: CustomerContactCountAggregateInput;

    @Field(() => CustomerContactAvgAggregateInput, {nullable:true})
    _avg?: CustomerContactAvgAggregateInput;

    @Field(() => CustomerContactSumAggregateInput, {nullable:true})
    _sum?: CustomerContactSumAggregateInput;

    @Field(() => CustomerContactMinAggregateInput, {nullable:true})
    _min?: CustomerContactMinAggregateInput;

    @Field(() => CustomerContactMaxAggregateInput, {nullable:true})
    _max?: CustomerContactMaxAggregateInput;
}
