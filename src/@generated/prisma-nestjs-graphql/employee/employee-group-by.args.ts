import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';
import { EmployeeOrderByWithAggregationInput } from './employee-order-by-with-aggregation.input';
import { EmployeeScalarFieldEnum } from './employee-scalar-field.enum';
import { EmployeeScalarWhereWithAggregatesInput } from './employee-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EmployeeCountAggregateInput } from './employee-count-aggregate.input';
import { EmployeeAvgAggregateInput } from './employee-avg-aggregate.input';
import { EmployeeSumAggregateInput } from './employee-sum-aggregate.input';
import { EmployeeMinAggregateInput } from './employee-min-aggregate.input';
import { EmployeeMaxAggregateInput } from './employee-max-aggregate.input';

@ArgsType()
export class EmployeeGroupByArgs {

    @Field(() => EmployeeWhereInput, {nullable:true})
    where?: EmployeeWhereInput;

    @Field(() => [EmployeeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EmployeeOrderByWithAggregationInput>;

    @Field(() => [EmployeeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmployeeScalarFieldEnum>;

    @Field(() => EmployeeScalarWhereWithAggregatesInput, {nullable:true})
    having?: EmployeeScalarWhereWithAggregatesInput;

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
