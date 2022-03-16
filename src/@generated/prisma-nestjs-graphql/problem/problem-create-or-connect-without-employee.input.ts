import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { ProblemCreateWithoutEmployeeInput } from './problem-create-without-employee.input';

@InputType()
export class ProblemCreateOrConnectWithoutEmployeeInput {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    where!: ProblemWhereUniqueInput;

    @Field(() => ProblemCreateWithoutEmployeeInput, {nullable:false})
    create!: ProblemCreateWithoutEmployeeInput;
}
