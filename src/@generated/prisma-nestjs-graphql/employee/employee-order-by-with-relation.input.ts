import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';
import { EmailSentOrderByRelationAggregateInput } from '../email-sent/email-sent-order-by-relation-aggregate.input';
import { EmployeeRoleOrderByRelationAggregateInput } from '../employee-role/employee-role-order-by-relation-aggregate.input';
import { ProblemOrderByRelationAggregateInput } from '../problem/problem-order-by-relation-aggregate.input';

@InputType()
export class EmployeeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    departmentId?: keyof typeof SortOrder;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    department?: DepartmentOrderByWithRelationInput;

    @Field(() => EmailSentOrderByRelationAggregateInput, {nullable:true})
    EmailSent?: EmailSentOrderByRelationAggregateInput;

    @Field(() => EmployeeRoleOrderByRelationAggregateInput, {nullable:true})
    EmployeeRole?: EmployeeRoleOrderByRelationAggregateInput;

    @Field(() => ProblemOrderByRelationAggregateInput, {nullable:true})
    Problem?: ProblemOrderByRelationAggregateInput;
}
