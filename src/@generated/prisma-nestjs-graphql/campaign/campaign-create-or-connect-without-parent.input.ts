import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignCreateWithoutParentInput } from './campaign-create-without-parent.input';

@InputType()
export class CampaignCreateOrConnectWithoutParentInput {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;

    @Field(() => CampaignCreateWithoutParentInput, {nullable:false})
    create!: CampaignCreateWithoutParentInput;
}
