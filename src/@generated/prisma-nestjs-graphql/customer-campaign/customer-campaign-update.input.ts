import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CampaignUpdateOneRequiredWithoutCustomerCampaignInput } from '../campaign/campaign-update-one-required-without-customer-campaign.input';
import { CustomerUpdateOneRequiredWithoutCustomerCampaignInput } from '../customer/customer-update-one-required-without-customer-campaign.input';

@InputType()
export class CustomerCampaignUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    note?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CampaignUpdateOneRequiredWithoutCustomerCampaignInput, {nullable:true})
    campaign?: CampaignUpdateOneRequiredWithoutCustomerCampaignInput;

    @Field(() => CustomerUpdateOneRequiredWithoutCustomerCampaignInput, {nullable:true})
    customer?: CustomerUpdateOneRequiredWithoutCustomerCampaignInput;
}
