import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignUpdateWithoutParentInput } from './campaign-update-without-parent.input';
import { CampaignCreateWithoutParentInput } from './campaign-create-without-parent.input';

@InputType()
export class CampaignUpsertWithWhereUniqueWithoutParentInput {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;

    @Field(() => CampaignUpdateWithoutParentInput, {nullable:false})
    update!: CampaignUpdateWithoutParentInput;

    @Field(() => CampaignCreateWithoutParentInput, {nullable:false})
    create!: CampaignCreateWithoutParentInput;
}
