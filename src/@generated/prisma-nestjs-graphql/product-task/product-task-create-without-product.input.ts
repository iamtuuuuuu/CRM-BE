import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedOneWithoutProductTaskInput } from '../task/task-create-nested-one-without-product-task.input';

@InputType()
export class ProductTaskCreateWithoutProductInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TaskCreateNestedOneWithoutProductTaskInput, {nullable:false})
    task!: TaskCreateNestedOneWithoutProductTaskInput;
}
