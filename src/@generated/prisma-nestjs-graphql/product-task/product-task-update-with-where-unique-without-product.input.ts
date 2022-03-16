import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';
import { ProductTaskUpdateWithoutProductInput } from './product-task-update-without-product.input';

@InputType()
export class ProductTaskUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ProductTaskWhereUniqueInput, {nullable:false})
    where!: ProductTaskWhereUniqueInput;

    @Field(() => ProductTaskUpdateWithoutProductInput, {nullable:false})
    data!: ProductTaskUpdateWithoutProductInput;
}
