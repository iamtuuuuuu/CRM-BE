import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutProductTaskInput } from './task-create-without-product-task.input';
import { TaskCreateOrConnectWithoutProductTaskInput } from './task-create-or-connect-without-product-task.input';
import { TaskUpsertWithoutProductTaskInput } from './task-upsert-without-product-task.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutProductTaskInput } from './task-update-without-product-task.input';

@InputType()
export class TaskUpdateOneRequiredWithoutProductTaskInput {

    @Field(() => TaskCreateWithoutProductTaskInput, {nullable:true})
    create?: TaskCreateWithoutProductTaskInput;

    @Field(() => TaskCreateOrConnectWithoutProductTaskInput, {nullable:true})
    connectOrCreate?: TaskCreateOrConnectWithoutProductTaskInput;

    @Field(() => TaskUpsertWithoutProductTaskInput, {nullable:true})
    upsert?: TaskUpsertWithoutProductTaskInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutProductTaskInput, {nullable:true})
    update?: TaskUpdateWithoutProductTaskInput;
}
