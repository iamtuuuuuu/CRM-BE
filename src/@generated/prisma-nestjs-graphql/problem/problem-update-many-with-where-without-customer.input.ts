import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemScalarWhereInput } from './problem-scalar-where.input';
import { ProblemUpdateManyMutationInput } from './problem-update-many-mutation.input';

@InputType()
export class ProblemUpdateManyWithWhereWithoutCustomerInput {

    @Field(() => ProblemScalarWhereInput, {nullable:false})
    where!: ProblemScalarWhereInput;

    @Field(() => ProblemUpdateManyMutationInput, {nullable:false})
    data!: ProblemUpdateManyMutationInput;
}
