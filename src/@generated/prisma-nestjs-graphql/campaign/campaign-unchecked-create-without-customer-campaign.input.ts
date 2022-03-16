import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CampaignRoleUncheckedCreateNestedManyWithoutCampaignInput } from '../campaign-role/campaign-role-unchecked-create-nested-many-without-campaign.input';
import { CampaignTaskUncheckedCreateNestedManyWithoutCampaignInput } from '../campaign-task/campaign-task-unchecked-create-nested-many-without-campaign.input';

@InputType()
export class CampaignUncheckedCreateWithoutCustomerCampaignInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    campaignStatusId!: number;

    @Field(() => String, {nullable:true})
    linkImg?: string;

    @Field(() => CampaignRoleUncheckedCreateNestedManyWithoutCampaignInput, {nullable:true})
    CampaignRole?: CampaignRoleUncheckedCreateNestedManyWithoutCampaignInput;

    @Field(() => CampaignTaskUncheckedCreateNestedManyWithoutCampaignInput, {nullable:true})
    CampaignTask?: CampaignTaskUncheckedCreateNestedManyWithoutCampaignInput;
}
