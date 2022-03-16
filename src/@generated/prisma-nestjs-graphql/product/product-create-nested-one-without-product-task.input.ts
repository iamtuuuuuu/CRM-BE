import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutProductTaskInput } from './product-create-without-product-task.input';
import { ProductCreateOrConnectWithoutProductTaskInput } from './product-create-or-connect-without-product-task.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutProductTaskInput {

    @Field(() => ProductCreateWithoutProductTaskInput, {nullable:true})
    create?: ProductCreateWithoutProductTaskInput;

    @Field(() => ProductCreateOrConnectWithoutProductTaskInput, {nullable:true})
    connectOrCreate?: ProductCreateOrConnectWithoutProductTaskInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: ProductWhereUniqueInput;
}
