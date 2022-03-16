import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';
import { ProductTaskCreateWithoutProductInput } from './product-task-create-without-product.input';

@InputType()
export class ProductTaskCreateOrConnectWithoutProductInput {

    @Field(() => ProductTaskWhereUniqueInput, {nullable:false})
    where!: ProductTaskWhereUniqueInput;

    @Field(() => ProductTaskCreateWithoutProductInput, {nullable:false})
    create!: ProductTaskCreateWithoutProductInput;
}
