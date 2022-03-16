import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CampaignRoleUpdateManyWithoutRoleInput } from '../campaign-role/campaign-role-update-many-without-role.input';

@InputType()
export class RoleUpdateWithoutEmployeeRoleInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;

    @Field(() => CampaignRoleUpdateManyWithoutRoleInput, {nullable:true})
    CampaignRole?: CampaignRoleUpdateManyWithoutRoleInput;
}
