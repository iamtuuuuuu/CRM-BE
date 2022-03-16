import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutProblemInput } from './employee-create-without-problem.input';
import { EmployeeCreateOrConnectWithoutProblemInput } from './employee-create-or-connect-without-problem.input';
import { EmployeeUpsertWithoutProblemInput } from './employee-upsert-without-problem.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutProblemInput } from './employee-update-without-problem.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutProblemInput {

    @Field(() => EmployeeCreateWithoutProblemInput, {nullable:true})
    create?: EmployeeCreateWithoutProblemInput;

    @Field(() => EmployeeCreateOrConnectWithoutProblemInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutProblemInput;

    @Field(() => EmployeeUpsertWithoutProblemInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutProblemInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutProblemInput, {nullable:true})
    update?: EmployeeUpdateWithoutProblemInput;
}
