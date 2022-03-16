import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';

@ArgsType()
export class FindUniqueProblemArgs {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    where!: ProblemWhereUniqueInput;
}
