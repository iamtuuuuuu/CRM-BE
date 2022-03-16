import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutProblemInput } from './employee-create-without-problem.input';
import { EmployeeCreateOrConnectWithoutProblemInput } from './employee-create-or-connect-without-problem.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutProblemInput {

    @Field(() => EmployeeCreateWithoutProblemInput, {nullable:true})
    create?: EmployeeCreateWithoutProblemInput;

    @Field(() => EmployeeCreateOrConnectWithoutProblemInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutProblemInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
