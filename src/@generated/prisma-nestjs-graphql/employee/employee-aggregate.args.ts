import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';
import { EmployeeOrderByWithRelationInput } from './employee-order-by-with-relation.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmployeeCountAggregateInput } from './employee-count-aggregate.input';
import { EmployeeAvgAggregateInput } from './employee-avg-aggregate.input';
import { EmployeeSumAggregateInput } from './employee-sum-aggregate.input';
import { EmployeeMinAggregateInput } from './employee-min-aggregate.input';
import { EmployeeMaxAggregateInput } from './employee-max-aggregate.input';

@ArgsType()
export class EmployeeAggregateArgs {

    @Field(() => EmployeeWhereInput, {nullable:true})
    where?: EmployeeWhereInput;

    @Field(() => [EmployeeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeOrderByWithRelationInput>;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    cursor?: EmployeeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EmployeeCountAggregateInput, {nullable:true})
    _count?: EmployeeCountAggregateInput;

    @Field(() => EmployeeAvgAggregateInput, {nullable:true})
    _avg?: EmployeeAvgAggregateInput;

    @Field(() => EmployeeSumAggregateInput, {nullable:true})
    _sum?: EmployeeSumAggregateInput;

    @Field(() => EmployeeMinAggregateInput, {nullable:true})
    _min?: EmployeeMinAggregateInput;

    @Field(() => EmployeeMaxAggregateInput, {nullable:true})
    _max?: EmployeeMaxAggregateInput;
}
