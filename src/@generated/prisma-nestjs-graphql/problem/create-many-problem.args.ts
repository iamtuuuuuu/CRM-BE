import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemCreateManyInput } from './problem-create-many.input';

@ArgsType()
export class CreateManyProblemArgs {

    @Field(() => [ProblemCreateManyInput], {nullable:false})
    data!: Array<ProblemCreateManyInput>;
}
