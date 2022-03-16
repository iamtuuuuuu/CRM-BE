import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CustomerUpdateManyWithoutCustomerContactInput } from '../customer/customer-update-many-without-customer-contact.input';

@InputType()
export class CustomerContactUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ref?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CustomerUpdateManyWithoutCustomerContactInput, {nullable:true})
    Customer?: CustomerUpdateManyWithoutCustomerContactInput;
}
