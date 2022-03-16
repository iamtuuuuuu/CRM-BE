import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskScalarWhereInput } from './product-task-scalar-where.input';
import { ProductTaskUpdateManyMutationInput } from './product-task-update-many-mutation.input';

@InputType()
export class ProductTaskUpdateManyWithWhereWithoutTaskInput {

    @Field(() => ProductTaskScalarWhereInput, {nullable:false})
    where!: ProductTaskScalarWhereInput;

    @Field(() => ProductTaskUpdateManyMutationInput, {nullable:false})
    data!: ProductTaskUpdateManyMutationInput;
}
