import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DepartmentCountAggregate } from './department-count-aggregate.output';
import { DepartmentAvgAggregate } from './department-avg-aggregate.output';
import { DepartmentSumAggregate } from './department-sum-aggregate.output';
import { DepartmentMinAggregate } from './department-min-aggregate.output';
import { DepartmentMaxAggregate } from './department-max-aggregate.output';

@ObjectType()
export class AggregateDepartment {

    @Field(() => DepartmentCountAggregate, {nullable:true})
    _count?: DepartmentCountAggregate;

    @Field(() => DepartmentAvgAggregate, {nullable:true})
    _avg?: DepartmentAvgAggregate;

    @Field(() => DepartmentSumAggregate, {nullable:true})
    _sum?: DepartmentSumAggregate;

    @Field(() => DepartmentMinAggregate, {nullable:true})
    _min?: DepartmentMinAggregate;

    @Field(() => DepartmentMaxAggregate, {nullable:true})
    _max?: DepartmentMaxAggregate;
}
