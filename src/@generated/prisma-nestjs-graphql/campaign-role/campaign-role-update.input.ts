import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CampaignUpdateOneRequiredWithoutCampaignRoleInput } from '../campaign/campaign-update-one-required-without-campaign-role.input';
import { RoleUpdateOneRequiredWithoutCampaignRoleInput } from '../role/role-update-one-required-without-campaign-role.input';

@InputType()
export class CampaignRoleUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CampaignUpdateOneRequiredWithoutCampaignRoleInput, {nullable:true})
    campaign?: CampaignUpdateOneRequiredWithoutCampaignRoleInput;

    @Field(() => RoleUpdateOneRequiredWithoutCampaignRoleInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutCampaignRoleInput;
}
