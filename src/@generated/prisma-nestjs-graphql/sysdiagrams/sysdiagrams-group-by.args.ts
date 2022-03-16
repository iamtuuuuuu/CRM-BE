import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sysdiagramsWhereInput } from './sysdiagrams-where.input';
import { sysdiagramsOrderByWithAggregationInput } from './sysdiagrams-order-by-with-aggregation.input';
import { SysdiagramsScalarFieldEnum } from '../prisma/sysdiagrams-scalar-field.enum';
import { sysdiagramsScalarWhereWithAggregatesInput } from './sysdiagrams-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class sysdiagramsGroupByArgs {

    @Field(() => sysdiagramsWhereInput, {nullable:true})
    where?: sysdiagramsWhereInput;

    @Field(() => [sysdiagramsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<sysdiagramsOrderByWithAggregationInput>;

    @Field(() => [SysdiagramsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SysdiagramsScalarFieldEnum>;

    @Field(() => sysdiagramsScalarWhereWithAggregatesInput, {nullable:true})
    having?: sysdiagramsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
