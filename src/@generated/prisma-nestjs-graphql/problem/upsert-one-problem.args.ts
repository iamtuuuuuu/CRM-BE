import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { ProblemCreateInput } from './problem-create.input';
import { ProblemUpdateInput } from './problem-update.input';

@ArgsType()
export class UpsertOneProblemArgs {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    where!: ProblemWhereUniqueInput;

    @Field(() => ProblemCreateInput, {nullable:false})
    create!: ProblemCreateInput;

    @Field(() => ProblemUpdateInput, {nullable:false})
    update!: ProblemUpdateInput;
}
