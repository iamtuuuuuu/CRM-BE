import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleCreateNestedManyWithoutCampaignInput } from '../campaign-role/campaign-role-create-nested-many-without-campaign.input';
import { CampaignTaskCreateNestedManyWithoutCampaignInput } from '../campaign-task/campaign-task-create-nested-many-without-campaign.input';
import { CustomerCampaignCreateNestedManyWithoutCampaignInput } from '../customer-campaign/customer-campaign-create-nested-many-without-campaign.input';

@InputType()
export class CampaignCreateWithoutCampaignStatusInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    linkImg?: string;

    @Field(() => CampaignRoleCreateNestedManyWithoutCampaignInput, {nullable:true})
    CampaignRole?: CampaignRoleCreateNestedManyWithoutCampaignInput;

    @Field(() => CampaignTaskCreateNestedManyWithoutCampaignInput, {nullable:true})
    CampaignTask?: CampaignTaskCreateNestedManyWithoutCampaignInput;

    @Field(() => CustomerCampaignCreateNestedManyWithoutCampaignInput, {nullable:true})
    CustomerCampaign?: CustomerCampaignCreateNestedManyWithoutCampaignInput;
}
