import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTaskUpdateManyMutationInput } from './product-task-update-many-mutation.input';
import { ProductTaskWhereInput } from './product-task-where.input';

@ArgsType()
export class UpdateManyProductTaskArgs {

    @Field(() => ProductTaskUpdateManyMutationInput, {nullable:false})
    data!: ProductTaskUpdateManyMutationInput;

    @Field(() => ProductTaskWhereInput, {nullable:true})
    where?: ProductTaskWhereInput;
}
