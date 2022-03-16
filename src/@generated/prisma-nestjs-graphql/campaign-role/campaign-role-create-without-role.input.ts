import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateNestedOneWithoutCampaignRoleInput } from '../campaign/campaign-create-nested-one-without-campaign-role.input';

@InputType()
export class CampaignRoleCreateWithoutRoleInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CampaignCreateNestedOneWithoutCampaignRoleInput, {nullable:false})
    campaign!: CampaignCreateNestedOneWithoutCampaignRoleInput;
}
