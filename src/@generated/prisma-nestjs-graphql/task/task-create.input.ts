import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskCreateNestedManyWithoutTaskInput } from '../campaign-task/campaign-task-create-nested-many-without-task.input';
import { ProductTaskCreateNestedManyWithoutTaskInput } from '../product-task/product-task-create-nested-many-without-task.input';

@InputType()
export class TaskCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => CampaignTaskCreateNestedManyWithoutTaskInput, {nullable:true})
    CampaignTask?: CampaignTaskCreateNestedManyWithoutTaskInput;

    @Field(() => ProductTaskCreateNestedManyWithoutTaskInput, {nullable:true})
    ProductTask?: ProductTaskCreateNestedManyWithoutTaskInput;
}
