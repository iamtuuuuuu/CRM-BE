import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TaskUpdateOneRequiredWithoutProductTaskInput } from '../task/task-update-one-required-without-product-task.input';

@InputType()
export class ProductTaskUpdateWithoutProductInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TaskUpdateOneRequiredWithoutProductTaskInput, {nullable:true})
    task?: TaskUpdateOneRequiredWithoutProductTaskInput;
}
