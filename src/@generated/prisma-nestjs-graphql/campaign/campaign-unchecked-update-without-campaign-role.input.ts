import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CampaignTaskUncheckedUpdateManyWithoutCampaignInput } from '../campaign-task/campaign-task-unchecked-update-many-without-campaign.input';
import { CustomerCampaignUncheckedUpdateManyWithoutCampaignInput } from '../customer-campaign/customer-campaign-unchecked-update-many-without-campaign.input';

@InputType()
export class CampaignUncheckedUpdateWithoutCampaignRoleInput {

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    campaignStatusId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    linkImg?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CampaignTaskUncheckedUpdateManyWithoutCampaignInput, {nullable:true})
    CampaignTask?: CampaignTaskUncheckedUpdateManyWithoutCampaignInput;

    @Field(() => CustomerCampaignUncheckedUpdateManyWithoutCampaignInput, {nullable:true})
    CustomerCampaign?: CustomerCampaignUncheckedUpdateManyWithoutCampaignInput;
}
