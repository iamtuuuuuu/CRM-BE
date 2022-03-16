import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';
import { ProductTaskUpdateWithoutProductInput } from './product-task-update-without-product.input';
import { ProductTaskCreateWithoutProductInput } from './product-task-create-without-product.input';

@InputType()
export class ProductTaskUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => ProductTaskWhereUniqueInput, {nullable:false})
    where!: ProductTaskWhereUniqueInput;

    @Field(() => ProductTaskUpdateWithoutProductInput, {nullable:false})
    update!: ProductTaskUpdateWithoutProductInput;

    @Field(() => ProductTaskCreateWithoutProductInput, {nullable:false})
    create!: ProductTaskCreateWithoutProductInput;
}
