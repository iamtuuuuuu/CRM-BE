import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CustomerCampaignUncheckedUpdateManyWithoutCustomerInput } from '../customer-campaign/customer-campaign-unchecked-update-many-without-customer.input';
import { EmailSentUncheckedUpdateManyWithoutCustomerInput } from '../email-sent/email-sent-unchecked-update-many-without-customer.input';
import { ProblemUncheckedUpdateManyWithoutCustomerInput } from '../problem/problem-unchecked-update-many-without-customer.input';

@InputType()
export class CustomerUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dob?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    gender?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    customerContactId?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => CustomerCampaignUncheckedUpdateManyWithoutCustomerInput, {nullable:true})
    CustomerCampaign?: CustomerCampaignUncheckedUpdateManyWithoutCustomerInput;

    @Field(() => EmailSentUncheckedUpdateManyWithoutCustomerInput, {nullable:true})
    EmailSent?: EmailSentUncheckedUpdateManyWithoutCustomerInput;

    @Field(() => ProblemUncheckedUpdateManyWithoutCustomerInput, {nullable:true})
    Problem?: ProblemUncheckedUpdateManyWithoutCustomerInput;
}
