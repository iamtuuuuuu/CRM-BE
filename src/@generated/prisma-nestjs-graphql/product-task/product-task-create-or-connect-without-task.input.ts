import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductTaskWhereUniqueInput } from './product-task-where-unique.input';
import { ProductTaskCreateWithoutTaskInput } from './product-task-create-without-task.input';

@InputType()
export class ProductTaskCreateOrConnectWithoutTaskInput {

    @Field(() => ProductTaskWhereUniqueInput, {nullable:false})
    where!: ProductTaskWhereUniqueInput;

    @Field(() => ProductTaskCreateWithoutTaskInput, {nullable:false})
    create!: ProductTaskCreateWithoutTaskInput;
}
