import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CampaignTaskUncheckedUpdateManyWithoutTaskInput } from '../campaign-task/campaign-task-unchecked-update-many-without-task.input';
import { ProductTaskUncheckedUpdateManyWithoutTaskInput } from '../product-task/product-task-unchecked-update-many-without-task.input';

@InputType()
export class TaskUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CampaignTaskUncheckedUpdateManyWithoutTaskInput, {nullable:true})
    CampaignTask?: CampaignTaskUncheckedUpdateManyWithoutTaskInput;

    @Field(() => ProductTaskUncheckedUpdateManyWithoutTaskInput, {nullable:true})
    ProductTask?: ProductTaskUncheckedUpdateManyWithoutTaskInput;
}
