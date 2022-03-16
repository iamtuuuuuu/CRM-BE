import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemUpdateInput } from './problem-update.input';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';

@ArgsType()
export class UpdateOneProblemArgs {

    @Field(() => ProblemUpdateInput, {nullable:false})
    data!: ProblemUpdateInput;

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    where!: ProblemWhereUniqueInput;
}
