import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutCampaignRoleInput } from '../role/role-update-one-required-without-campaign-role.input';

@InputType()
export class CampaignRoleUpdateWithoutCampaignInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RoleUpdateOneRequiredWithoutCampaignRoleInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutCampaignRoleInput;
}
