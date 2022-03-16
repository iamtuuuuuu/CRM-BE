import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductTaskUncheckedCreateNestedManyWithoutProductInput } from '../product-task/product-task-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    linkImg?: string;

    @Field(() => ProductTaskUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    ProductTask?: ProductTaskUncheckedCreateNestedManyWithoutProductInput;
}
