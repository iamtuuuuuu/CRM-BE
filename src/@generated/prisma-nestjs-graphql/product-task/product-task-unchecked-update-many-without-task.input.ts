import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskCreateWithoutTaskInput } from './product-task-create-without-task.input';
import { ProductTaskCreateOrConnectWithoutTaskInput } from './product-task-create-or-connect-without-task.input';
import { ProductTaskUpsertWithWhereUniqueWithoutTaskInput } from './product-task-upsert-with-where-unique-without-task.input';
import { ProductTaskCreateManyTaskInputEnvelope } from './product-task-create-many-task-input-envelope.input';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';
import { ProductTaskUpdateWithWhereUniqueWithoutTaskInput } from './product-task-update-with-where-unique-without-task.input';
import { ProductTaskUpdateManyWithWhereWithoutTaskInput } from './product-task-update-many-with-where-without-task.input';
import { ProductTaskScalarWhereInput } from './product-task-scalar-where.input';

@InputType()
export class ProductTaskUncheckedUpdateManyWithoutTaskInput {

    @Field(() => [ProductTaskCreateWithoutTaskInput], {nullable:true})
    create?: Array<ProductTaskCreateWithoutTaskInput>;

    @Field(() => [ProductTaskCreateOrConnectWithoutTaskInput], {nullable:true})
    connectOrCreate?: Array<ProductTaskCreateOrConnectWithoutTaskInput>;

    @Field(() => [ProductTaskUpsertWithWhereUniqueWithoutTaskInput], {nullable:true})
    upsert?: Array<ProductTaskUpsertWithWhereUniqueWithoutTaskInput>;

    @Field(() => ProductTaskCreateManyTaskInputEnvelope, {nullable:true})
    createMany?: ProductTaskCreateManyTaskInputEnvelope;

    @Field(() => [ProductTaskWhereUniqueInput], {nullable:true})
    set?: Array<ProductTaskWhereUniqueInput>;

    @Field(() => [ProductTaskWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductTaskWhereUniqueInput>;

    @Field(() => [ProductTaskWhereUniqueInput], {nullable:true})
    delete?: Array<ProductTaskWhereUniqueInput>;

    @Field(() => [ProductTaskWhereUniqueInput], {nullable:true})
    connect?: Array<ProductTaskWhereUniqueInput>;

    @Field(() => [ProductTaskUpdateWithWhereUniqueWithoutTaskInput], {nullable:true})
    update?: Array<ProductTaskUpdateWithWhereUniqueWithoutTaskInput>;

    @Field(() => [ProductTaskUpdateManyWithWhereWithoutTaskInput], {nullable:true})
    updateMany?: Array<ProductTaskUpdateManyWithWhereWithoutTaskInput>;

    @Field(() => [ProductTaskScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductTaskScalarWhereInput>;
}
