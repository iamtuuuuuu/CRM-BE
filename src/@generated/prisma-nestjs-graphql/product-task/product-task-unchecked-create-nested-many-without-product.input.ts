import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskCreateWithoutProductInput } from './product-task-create-without-product.input';
import { ProductTaskCreateOrConnectWithoutProductInput } from './product-task-create-or-connect-without-product.input';
import { ProductTaskCreateManyProductInputEnvelope } from './product-task-create-many-product-input-envelope.input';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';

@InputType()
export class ProductTaskUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [ProductTaskCreateWithoutProductInput], {nullable:true})
    create?: Array<ProductTaskCreateWithoutProductInput>;

    @Field(() => [ProductTaskCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<ProductTaskCreateOrConnectWithoutProductInput>;

    @Field(() => ProductTaskCreateManyProductInputEnvelope, {nullable:true})
    createMany?: ProductTaskCreateManyProductInputEnvelope;

    @Field(() => [ProductTaskWhereUniqueInput], {nullable:true})
    connect?: Array<ProductTaskWhereUniqueInput>;
}
