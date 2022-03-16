import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateNestedOneWithoutProblemInput } from '../employee/employee-create-nested-one-without-problem.input';

@InputType()
export class ProblemCreateWithoutCustomerInput {

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => EmployeeCreateNestedOneWithoutProblemInput, {nullable:false})
    employee!: EmployeeCreateNestedOneWithoutProblemInput;
}
