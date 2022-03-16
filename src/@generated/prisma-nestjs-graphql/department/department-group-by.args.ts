import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { DepartmentOrderByWithAggregationInput } from './department-order-by-with-aggregation.input';
import { DepartmentScalarFieldEnum } from './department-scalar-field.enum';
import { DepartmentScalarWhereWithAggregatesInput } from './department-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DepartmentCountAggregateInput } from './department-count-aggregate.input';
import { DepartmentAvgAggregateInput } from './department-avg-aggregate.input';
import { DepartmentSumAggregateInput } from './department-sum-aggregate.input';
import { DepartmentMinAggregateInput } from './department-min-aggregate.input';
import { DepartmentMaxAggregateInput } from './department-max-aggregate.input';

@ArgsType()
export class DepartmentGroupByArgs {

    @Field(() => DepartmentWhereInput, {nullable:true})
    where?: DepartmentWhereInput;

    @Field(() => [DepartmentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DepartmentOrderByWithAggregationInput>;

    @Field(() => [DepartmentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DepartmentScalarFieldEnum>;

    @Field(() => DepartmentScalarWhereWithAggregatesInput, {nullable:true})
    having?: DepartmentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DepartmentCountAggregateInput, {nullable:true})
    _count?: DepartmentCountAggregateInput;

    @Field(() => DepartmentAvgAggregateInput, {nullable:true})
    _avg?: DepartmentAvgAggregateInput;

    @Field(() => DepartmentSumAggregateInput, {nullable:true})
    _sum?: DepartmentSumAggregateInput;

    @Field(() => DepartmentMinAggregateInput, {nullable:true})
    _min?: DepartmentMinAggregateInput;

    @Field(() => DepartmentMaxAggregateInput, {nullable:true})
    _max?: DepartmentMaxAggregateInput;
}
