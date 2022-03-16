import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CampaignTaskUncheckedCreateNestedManyWithoutCampaignInput } from '../campaign-task/campaign-task-unchecked-create-nested-many-without-campaign.input';
import { CustomerCampaignUncheckedCreateNestedManyWithoutCampaignInput } from '../customer-campaign/customer-campaign-unchecked-create-nested-many-without-campaign.input';

@InputType()
export class CampaignUncheckedCreateWithoutCampaignRoleInput {

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

    @Field(() => CampaignTaskUncheckedCreateNestedManyWithoutCampaignInput, {nullable:true})
    CampaignTask?: CampaignTaskUncheckedCreateNestedManyWithoutCampaignInput;

    @Field(() => CustomerCampaignUncheckedCreateNestedManyWithoutCampaignInput, {nullable:true})
    CustomerCampaign?: CustomerCampaignUncheckedCreateNestedManyWithoutCampaignInput;
}
