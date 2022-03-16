import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemWhereInput } from './problem-where.input';
import { ProblemOrderByWithAggregationInput } from './problem-order-by-with-aggregation.input';
import { ProblemScalarFieldEnum } from './problem-scalar-field.enum';
import { ProblemScalarWhereWithAggregatesInput } from './problem-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProblemCountAggregateInput } from './problem-count-aggregate.input';
import { ProblemAvgAggregateInput } from './problem-avg-aggregate.input';
import { ProblemSumAggregateInput } from './problem-sum-aggregate.input';
import { ProblemMinAggregateInput } from './problem-min-aggregate.input';
import { ProblemMaxAggregateInput } from './problem-max-aggregate.input';

@ArgsType()
export class ProblemGroupByArgs {

    @Field(() => ProblemWhereInput, {nullable:true})
    where?: ProblemWhereInput;

    @Field(() => [ProblemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProblemOrderByWithAggregationInput>;

    @Field(() => [ProblemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProblemScalarFieldEnum>;

    @Field(() => ProblemScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProblemScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProblemCountAggregateInput, {nullable:true})
    _count?: ProblemCountAggregateInput;

    @Field(() => ProblemAvgAggregateInput, {nullable:true})
    _avg?: ProblemAvgAggregateInput;

    @Field(() => ProblemSumAggregateInput, {nullable:true})
    _sum?: ProblemSumAggregateInput;

    @Field(() => ProblemMinAggregateInput, {nullable:true})
    _min?: ProblemMinAggregateInput;

    @Field(() => ProblemMaxAggregateInput, {nullable:true})
    _max?: ProblemMaxAggregateInput;
}
