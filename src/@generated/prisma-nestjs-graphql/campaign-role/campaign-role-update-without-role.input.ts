import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CampaignUpdateOneRequiredWithoutCampaignRoleInput } from '../campaign/campaign-update-one-required-without-campaign-role.input';

@InputType()
export class CampaignRoleUpdateWithoutRoleInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CampaignUpdateOneRequiredWithoutCampaignRoleInput, {nullable:true})
    campaign?: CampaignUpdateOneRequiredWithoutCampaignRoleInput;
}
