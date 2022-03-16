import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutProblemInput } from './employee-update-without-problem.input';
import { EmployeeCreateWithoutProblemInput } from './employee-create-without-problem.input';

@InputType()
export class EmployeeUpsertWithoutProblemInput {

    @Field(() => EmployeeUpdateWithoutProblemInput, {nullable:false})
    update!: EmployeeUpdateWithoutProblemInput;

    @Field(() => EmployeeCreateWithoutProblemInput, {nullable:false})
    create!: EmployeeCreateWithoutProblemInput;
}
