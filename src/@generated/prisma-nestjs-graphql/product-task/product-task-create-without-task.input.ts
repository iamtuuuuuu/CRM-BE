import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutProductTaskInput } from '../product/product-create-nested-one-without-product-task.input';

@InputType()
export class ProductTaskCreateWithoutTaskInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutProductTaskInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutProductTaskInput;
}
