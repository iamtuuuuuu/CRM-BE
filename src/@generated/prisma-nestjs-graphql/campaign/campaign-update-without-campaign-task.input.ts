import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CampaignStatusUpdateOneRequiredWithoutCampaignInput } from '../campaign-status/campaign-status-update-one-required-without-campaign.input';
import { CampaignRoleUpdateManyWithoutCampaignInput } from '../campaign-role/campaign-role-update-many-without-campaign.input';
import { CustomerCampaignUpdateManyWithoutCampaignInput } from '../customer-campaign/customer-campaign-update-many-without-campaign.input';

@InputType()
export class CampaignUpdateWithoutCampaignTaskInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    linkImg?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CampaignStatusUpdateOneRequiredWithoutCampaignInput, {nullable:true})
    campaignStatus?: CampaignStatusUpdateOneRequiredWithoutCampaignInput;

    @Field(() => CampaignRoleUpdateManyWithoutCampaignInput, {nullable:true})
    CampaignRole?: CampaignRoleUpdateManyWithoutCampaignInput;

    @Field(() => CustomerCampaignUpdateManyWithoutCampaignInput, {nullable:true})
    CustomerCampaign?: CustomerCampaignUpdateManyWithoutCampaignInput;
}
