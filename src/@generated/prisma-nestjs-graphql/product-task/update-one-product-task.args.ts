import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTaskUpdateInput } from './product-task-update.input';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';

@ArgsType()
export class UpdateOneProductTaskArgs {

    @Field(() => ProductTaskUpdateInput, {nullable:false})
    data!: ProductTaskUpdateInput;

    @Field(() => ProductTaskWhereUniqueInput, {nullable:false})
    where!: ProductTaskWhereUniqueInput;
}
