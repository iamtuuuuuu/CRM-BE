import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';
import { ProductTaskUpdateWithoutTaskInput } from './product-task-update-without-task.input';

@InputType()
export class ProductTaskUpdateWithWhereUniqueWithoutTaskInput {

    @Field(() => ProductTaskWhereUniqueInput, {nullable:false})
    where!: ProductTaskWhereUniqueInput;

    @Field(() => ProductTaskUpdateWithoutTaskInput, {nullable:false})
    data!: ProductTaskUpdateWithoutTaskInput;
}
