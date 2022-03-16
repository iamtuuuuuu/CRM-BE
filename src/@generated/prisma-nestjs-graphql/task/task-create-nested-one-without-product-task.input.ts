import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutProductTaskInput } from './task-create-without-product-task.input';
import { TaskCreateOrConnectWithoutProductTaskInput } from './task-create-or-connect-without-product-task.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutProductTaskInput {

    @Field(() => TaskCreateWithoutProductTaskInput, {nullable:true})
    create?: TaskCreateWithoutProductTaskInput;

    @Field(() => TaskCreateOrConnectWithoutProductTaskInput, {nullable:true})
    connectOrCreate?: TaskCreateOrConnectWithoutProductTaskInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    connect?: TaskWhereUniqueInput;
}
