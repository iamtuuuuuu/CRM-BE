import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { DepartmentOrderByWithRelationInput } from './department-order-by-with-relation.input';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DepartmentCountAggregateInput } from './department-count-aggregate.input';
import { DepartmentAvgAggregateInput } from './department-avg-aggregate.input';
import { DepartmentSumAggregateInput } from './department-sum-aggregate.input';
import { DepartmentMinAggregateInput } from './department-min-aggregate.input';
import { DepartmentMaxAggregateInput } from './department-max-aggregate.input';

@ArgsType()
export class DepartmentAggregateArgs {

    @Field(() => DepartmentWhereInput, {nullable:true})
    where?: DepartmentWhereInput;

    @Field(() => [DepartmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DepartmentOrderByWithRelationInput>;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    cursor?: DepartmentWhereUniqueInput;

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
