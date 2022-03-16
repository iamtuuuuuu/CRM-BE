import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { ProblemUpdateWithoutEmployeeInput } from './problem-update-without-employee.input';

@InputType()
export class ProblemUpdateWithWhereUniqueWithoutEmployeeInput {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    where!: ProblemWhereUniqueInput;

    @Field(() => ProblemUpdateWithoutEmployeeInput, {nullable:false})
    data!: ProblemUpdateWithoutEmployeeInput;
}
