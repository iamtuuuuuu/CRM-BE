import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { CampaignUpdateOneRequiredWithoutCampaignTaskInput } from '../campaign/campaign-update-one-required-without-campaign-task.input';

@InputType()
export class CampaignTaskUpdateWithoutTaskInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isDone?: BoolFieldUpdateOperationsInput;

    @Field(() => CampaignUpdateOneRequiredWithoutCampaignTaskInput, {nullable:true})
    campaign?: CampaignUpdateOneRequiredWithoutCampaignTaskInput;
}
