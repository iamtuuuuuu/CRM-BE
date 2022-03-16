import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmployeeCountAggregate } from './employee-count-aggregate.output';
import { EmployeeAvgAggregate } from './employee-avg-aggregate.output';
import { EmployeeSumAggregate } from './employee-sum-aggregate.output';
import { EmployeeMinAggregate } from './employee-min-aggregate.output';
import { EmployeeMaxAggregate } from './employee-max-aggregate.output';

@ObjectType()
export class AggregateEmployee {

    @Field(() => EmployeeCountAggregate, {nullable:true})
    _count?: EmployeeCountAggregate;

    @Field(() => EmployeeAvgAggregate, {nullable:true})
    _avg?: EmployeeAvgAggregate;

    @Field(() => EmployeeSumAggregate, {nullable:true})
    _sum?: EmployeeSumAggregate;

    @Field(() => EmployeeMinAggregate, {nullable:true})
    _min?: EmployeeMinAggregate;

    @Field(() => EmployeeMaxAggregate, {nullable:true})
    _max?: EmployeeMaxAggregate;
}
