import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CustomerUpdateOneRequiredWithoutCustomerCampaignInput } from '../customer/customer-update-one-required-without-customer-campaign.input';

@InputType()
export class CustomerCampaignUpdateWithoutCampaignInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    note?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CustomerUpdateOneRequiredWithoutCustomerCampaignInput, {nullable:true})
    customer?: CustomerUpdateOneRequiredWithoutCustomerCampaignInput;
}
