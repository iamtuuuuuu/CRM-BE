import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CampaignTaskUncheckedCreateNestedManyWithoutTaskInput } from '../campaign-task/campaign-task-unchecked-create-nested-many-without-task.input';
import { ProductTaskUncheckedCreateNestedManyWithoutTaskInput } from '../product-task/product-task-unchecked-create-nested-many-without-task.input';

@InputType()
export class TaskUncheckedCreateInput {

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

    @Field(() => CampaignTaskUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    CampaignTask?: CampaignTaskUncheckedCreateNestedManyWithoutTaskInput;

    @Field(() => ProductTaskUncheckedCreateNestedManyWithoutTaskInput, {nullable:true})
    ProductTask?: ProductTaskUncheckedCreateNestedManyWithoutTaskInput;
}
