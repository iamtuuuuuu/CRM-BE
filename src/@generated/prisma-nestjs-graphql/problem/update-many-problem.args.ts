import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProblemUpdateManyMutationInput } from './problem-update-many-mutation.input';
import { ProblemWhereInput } from './problem-where.input';

@ArgsType()
export class UpdateManyProblemArgs {

    @Field(() => ProblemUpdateManyMutationInput, {nullable:false})
    data!: ProblemUpdateManyMutationInput;

    @Field(() => ProblemWhereInput, {nullable:true})
    where?: ProblemWhereInput;
}
