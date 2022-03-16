import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductUpdateOneRequiredWithoutProductTaskInput } from '../product/product-update-one-required-without-product-task.input';
import { TaskUpdateOneRequiredWithoutProductTaskInput } from '../task/task-update-one-required-without-product-task.input';

@InputType()
export class ProductTaskUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductUpdateOneRequiredWithoutProductTaskInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutProductTaskInput;

    @Field(() => TaskUpdateOneRequiredWithoutProductTaskInput, {nullable:true})
    task?: TaskUpdateOneRequiredWithoutProductTaskInput;
}
