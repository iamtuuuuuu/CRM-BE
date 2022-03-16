import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutProductTaskInput } from './product-create-without-product-task.input';

@InputType()
export class ProductCreateOrConnectWithoutProductTaskInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutProductTaskInput, {nullable:false})
    create!: ProductCreateWithoutProductTaskInput;
}
