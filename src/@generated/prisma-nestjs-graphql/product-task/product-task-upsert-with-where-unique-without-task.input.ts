import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';
import { ProductTaskUpdateWithoutTaskInput } from './product-task-update-without-task.input';
import { ProductTaskCreateWithoutTaskInput } from './product-task-create-without-task.input';

@InputType()
export class ProductTaskUpsertWithWhereUniqueWithoutTaskInput {

    @Field(() => ProductTaskWhereUniqueInput, {nullable:false})
    where!: ProductTaskWhereUniqueInput;

    @Field(() => ProductTaskUpdateWithoutTaskInput, {nullable:false})
    update!: ProductTaskUpdateWithoutTaskInput;

    @Field(() => ProductTaskCreateWithoutTaskInput, {nullable:false})
    create!: ProductTaskCreateWithoutTaskInput;
}
