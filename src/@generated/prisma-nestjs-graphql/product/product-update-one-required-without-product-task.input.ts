import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutProductTaskInput } from './product-create-without-product-task.input';
import { ProductCreateOrConnectWithoutProductTaskInput } from './product-create-or-connect-without-product-task.input';
import { ProductUpsertWithoutProductTaskInput } from './product-upsert-without-product-task.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutProductTaskInput } from './product-update-without-product-task.input';

@InputType()
export class ProductUpdateOneRequiredWithoutProductTaskInput {

    @Field(() => ProductCreateWithoutProductTaskInput, {nullable:true})
    create?: ProductCreateWithoutProductTaskInput;

    @Field(() => ProductCreateOrConnectWithoutProductTaskInput, {nullable:true})
    connectOrCreate?: ProductCreateOrConnectWithoutProductTaskInput;

    @Field(() => ProductUpsertWithoutProductTaskInput, {nullable:true})
    upsert?: ProductUpsertWithoutProductTaskInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutProductTaskInput, {nullable:true})
    update?: ProductUpdateWithoutProductTaskInput;
}
