import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateNestedManyWithoutCampaignStatusInput } from '../campaign/campaign-create-nested-many-without-campaign-status.input';

@InputType()
export class CampaignStatusCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => CampaignCreateNestedManyWithoutCampaignStatusInput, {nullable:true})
    Campaign?: CampaignCreateNestedManyWithoutCampaignStatusInput;
}
