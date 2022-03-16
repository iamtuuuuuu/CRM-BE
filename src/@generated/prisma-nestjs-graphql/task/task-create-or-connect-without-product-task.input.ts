import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskCreateWithoutProductTaskInput } from './task-create-without-product-task.input';

@InputType()
export class TaskCreateOrConnectWithoutProductTaskInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutProductTaskInput, {nullable:false})
    create!: TaskCreateWithoutProductTaskInput;
}
