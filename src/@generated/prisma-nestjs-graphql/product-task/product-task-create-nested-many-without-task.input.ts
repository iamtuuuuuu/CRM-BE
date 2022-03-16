import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskCreateWithoutTaskInput } from './product-task-create-without-task.input';
import { ProductTaskCreateOrConnectWithoutTaskInput } from './product-task-create-or-connect-without-task.input';
import { ProductTaskCreateManyTaskInputEnvelope } from './product-task-create-many-task-input-envelope.input';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';

@InputType()
export class ProductTaskCreateNestedManyWithoutTaskInput {

    @Field(() => [ProductTaskCreateWithoutTaskInput], {nullable:true})
    create?: Array<ProductTaskCreateWithoutTaskInput>;

    @Field(() => [ProductTaskCreateOrConnectWithoutTaskInput], {nullable:true})
    connectOrCreate?: Array<ProductTaskCreateOrConnectWithoutTaskInput>;

    @Field(() => ProductTaskCreateManyTaskInputEnvelope, {nullable:true})
    createMany?: ProductTaskCreateManyTaskInputEnvelope;

    @Field(() => [ProductTaskWhereUniqueInput], {nullable:true})
    connect?: Array<ProductTaskWhereUniqueInput>;
}
