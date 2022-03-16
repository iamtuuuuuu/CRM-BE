import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CampaignTaskUpdateManyWithoutTaskInput } from '../campaign-task/campaign-task-update-many-without-task.input';
import { ProductTaskUpdateManyWithoutTaskInput } from '../product-task/product-task-update-many-without-task.input';

@InputType()
export class TaskUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CampaignTaskUpdateManyWithoutTaskInput, {nullable:true})
    CampaignTask?: CampaignTaskUpdateManyWithoutTaskInput;

    @Field(() => ProductTaskUpdateManyWithoutTaskInput, {nullable:true})
    ProductTask?: ProductTaskUpdateManyWithoutTaskInput;
}
