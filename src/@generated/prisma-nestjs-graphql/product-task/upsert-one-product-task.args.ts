import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';
import { ProductTaskCreateInput } from './product-task-create.input';
import { ProductTaskUpdateInput } from './product-task-update.input';

@ArgsType()
export class UpsertOneProductTaskArgs {

    @Field(() => ProductTaskWhereUniqueInput, {nullable:false})
    where!: ProductTaskWhereUniqueInput;

    @Field(() => ProductTaskCreateInput, {nullable:false})
    create!: ProductTaskCreateInput;

    @Field(() => ProductTaskUpdateInput, {nullable:false})
    update!: ProductTaskUpdateInput;
}
