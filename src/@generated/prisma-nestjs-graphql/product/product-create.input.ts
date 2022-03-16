import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskCreateNestedManyWithoutProductInput } from '../product-task/product-task-create-nested-many-without-product.input';

@InputType()
export class ProductCreateInput {

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

    @Field(() => ProductTaskCreateNestedManyWithoutProductInput, {nullable:true})
    ProductTask?: ProductTaskCreateNestedManyWithoutProductInput;
}
