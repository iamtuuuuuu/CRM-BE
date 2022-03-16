import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemCreateInput } from './problem-create.input';

@ArgsType()
export class CreateOneProblemArgs {

    @Field(() => ProblemCreateInput, {nullable:false})
    data!: ProblemCreateInput;
}
