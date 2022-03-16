import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskCreateWithoutProductInput } from './product-task-create-without-product.input';
import { ProductTaskCreateOrConnectWithoutProductInput } from './product-task-create-or-connect-without-product.input';
import { ProductTaskUpsertWithWhereUniqueWithoutProductInput } from './product-task-upsert-with-where-unique-without-product.input';
import { ProductTaskCreateManyProductInputEnvelope } from './product-task-create-many-product-input-envelope.input';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';
import { ProductTaskUpdateWithWhereUniqueWithoutProductInput } from './product-task-update-with-where-unique-without-product.input';
import { ProductTaskUpdateManyWithWhereWithoutProductInput } from './product-task-update-many-with-where-without-product.input';
import { ProductTaskScalarWhereInput } from './product-task-scalar-where.input';

@InputType()
export class ProductTaskUpdateManyWithoutProductInput {

    @Field(() => [ProductTaskCreateWithoutProductInput], {nullable:true})
    create?: Array<ProductTaskCreateWithoutProductInput>;

    @Field(() => [ProductTaskCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<ProductTaskCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductTaskUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<ProductTaskUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductTaskCreateManyProductInputEnvelope, {nullable:true})
    createMany?: ProductTaskCreateManyProductInputEnvelope;

    @Field(() => [ProductTaskWhereUniqueInput], {nullable:true})
    set?: Array<ProductTaskWhereUniqueInput>;

    @Field(() => [ProductTaskWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductTaskWhereUniqueInput>;

    @Field(() => [ProductTaskWhereUniqueInput], {nullable:true})
    delete?: Array<ProductTaskWhereUniqueInput>;

    @Field(() => [ProductTaskWhereUniqueInput], {nullable:true})
    connect?: Array<ProductTaskWhereUniqueInput>;

    @Field(() => [ProductTaskUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<ProductTaskUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductTaskUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<ProductTaskUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductTaskScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductTaskScalarWhereInput>;
}
