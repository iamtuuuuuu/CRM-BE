import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutProductTaskInput } from './task-update-without-product-task.input';
import { TaskCreateWithoutProductTaskInput } from './task-create-without-product-task.input';

@InputType()
export class TaskUpsertWithoutProductTaskInput {

    @Field(() => TaskUpdateWithoutProductTaskInput, {nullable:false})
    update!: TaskUpdateWithoutProductTaskInput;

    @Field(() => TaskCreateWithoutProductTaskInput, {nullable:false})
    create!: TaskCreateWithoutProductTaskInput;
}
