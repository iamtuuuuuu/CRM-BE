import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutProductTaskInput } from './product-update-without-product-task.input';
import { ProductCreateWithoutProductTaskInput } from './product-create-without-product-task.input';

@InputType()
export class ProductUpsertWithoutProductTaskInput {

    @Field(() => ProductUpdateWithoutProductTaskInput, {nullable:false})
    update!: ProductUpdateWithoutProductTaskInput;

    @Field(() => ProductCreateWithoutProductTaskInput, {nullable:false})
    create!: ProductCreateWithoutProductTaskInput;
}
