import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CampaignUncheckedCreateNestedManyWithoutCampaignStatusInput } from '../campaign/campaign-unchecked-create-nested-many-without-campaign-status.input';

@InputType()
export class CampaignStatusUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => CampaignUncheckedCreateNestedManyWithoutCampaignStatusInput, {nullable:true})
    Campaign?: CampaignUncheckedCreateNestedManyWithoutCampaignStatusInput;
}
