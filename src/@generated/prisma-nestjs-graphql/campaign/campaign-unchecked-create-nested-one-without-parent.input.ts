import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutParentInput } from './campaign-create-without-parent.input';
import { CampaignCreateOrConnectWithoutParentInput } from './campaign-create-or-connect-without-parent.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';

@InputType()
export class CampaignUncheckedCreateNestedOneWithoutParentInput {

    @Field(() => CampaignCreateWithoutParentInput, {nullable:true})
    create?: CampaignCreateWithoutParentInput;

    @Field(() => CampaignCreateOrConnectWithoutParentInput, {nullable:true})
    connectOrCreate?: CampaignCreateOrConnectWithoutParentInput;

    @Field(() => CampaignWhereUniqueInput, {nullable:true})
    connect?: CampaignWhereUniqueInput;
}
