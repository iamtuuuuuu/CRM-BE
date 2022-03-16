import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignUpdateWithoutParentInput } from './campaign-update-without-parent.input';

@InputType()
export class CampaignUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;

    @Field(() => CampaignUpdateWithoutParentInput, {nullable:false})
    data!: CampaignUpdateWithoutParentInput;
}
