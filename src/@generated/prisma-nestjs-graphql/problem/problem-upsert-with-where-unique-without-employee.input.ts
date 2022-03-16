import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { ProblemUpdateWithoutEmployeeInput } from './problem-update-without-employee.input';
import { ProblemCreateWithoutEmployeeInput } from './problem-create-without-employee.input';

@InputType()
export class ProblemUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    where!: ProblemWhereUniqueInput;

    @Field(() => ProblemUpdateWithoutEmployeeInput, {nullable:false})
    update!: ProblemUpdateWithoutEmployeeInput;

    @Field(() => ProblemCreateWithoutEmployeeInput, {nullable:false})
    create!: ProblemCreateWithoutEmployeeInput;
}
