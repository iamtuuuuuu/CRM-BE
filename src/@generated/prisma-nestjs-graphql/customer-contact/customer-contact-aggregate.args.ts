import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerContactWhereInput } from './customer-contact-where.input';
import { CustomerContactOrderByWithRelationInput } from './customer-contact-order-by-with-relation.input';
import { CustomerContactWhereUniqueInput } from './customer-contact-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CustomerContactCountAggregateInput } from './customer-contact-count-aggregate.input';
import { CustomerContactAvgAggregateInput } from './customer-contact-avg-aggregate.input';
import { CustomerContactSumAggregateInput } from './customer-contact-sum-aggregate.input';
import { CustomerContactMinAggregateInput } from './customer-contact-min-aggregate.input';
import { CustomerContactMaxAggregateInput } from './customer-contact-max-aggregate.input';

@ArgsType()
export class CustomerContactAggregateArgs {

    @Field(() => CustomerContactWhereInput, {nullable:true})
    where?: CustomerContactWhereInput;

    @Field(() => [CustomerContactOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomerContactOrderByWithRelationInput>;

    @Field(() => CustomerContactWhereUniqueInput, {nullable:true})
    cursor?: CustomerContactWhereUniqueInput;

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
