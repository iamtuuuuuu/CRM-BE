import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignUpdateWithoutParentInput } from './campaign-update-without-parent.input';
import { CampaignCreateWithoutParentInput } from './campaign-create-without-parent.input';

@InputType()
export class CampaignUpsertWithoutParentInput {

    @Field(() => CampaignUpdateWithoutParentInput, {nullable:false})
    update!: CampaignUpdateWithoutParentInput;

    @Field(() => CampaignCreateWithoutParentInput, {nullable:false})
    create!: CampaignCreateWithoutParentInput;
}
