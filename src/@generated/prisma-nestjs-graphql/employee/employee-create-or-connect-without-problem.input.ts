import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutProblemInput } from './employee-create-without-problem.input';

@InputType()
export class EmployeeCreateOrConnectWithoutProblemInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutProblemInput, {nullable:false})
    create!: EmployeeCreateWithoutProblemInput;
}
