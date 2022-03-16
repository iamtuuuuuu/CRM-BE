import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductTaskUncheckedCreateNestedManyWithoutTaskInput } from '../product-task/product-task-unchecked-create-nested-many-without-task.input';

@InputType()
export class TaskUncheckedCreateWithoutCampaignTaskInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ProductTaskUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    ProductTask?: ProductTaskUncheckedCreateNestedManyWithoutTaskInput;
}
