import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CustomerContactUpdateOneRequiredWithoutCustomerInput } from '../customer-contact/customer-contact-update-one-required-without-customer.input';
import { CustomerCampaignUpdateManyWithoutCustomerInput } from '../customer-campaign/customer-campaign-update-many-without-customer.input';
import { EmailSentUpdateManyWithoutCustomerInput } from '../email-sent/email-sent-update-many-without-customer.input';

@InputType()
export class CustomerUpdateWithoutProblemInput {

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

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => CustomerContactUpdateOneRequiredWithoutCustomerInput, {nullable:true})
    CustomerContact?: CustomerContactUpdateOneRequiredWithoutCustomerInput;

    @Field(() => CustomerCampaignUpdateManyWithoutCustomerInput, {nullable:true})
    CustomerCampaign?: CustomerCampaignUpdateManyWithoutCustomerInput;

    @Field(() => EmailSentUpdateManyWithoutCustomerInput, {nullable:true})
    EmailSent?: EmailSentUpdateManyWithoutCustomerInput;
}
