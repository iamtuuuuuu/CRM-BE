import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemWhereInput } from './problem-where.input';

@ArgsType()
export class DeleteManyProblemArgs {

    @Field(() => ProblemWhereInput, {nullable:true})
    where?: ProblemWhereInput;
}
