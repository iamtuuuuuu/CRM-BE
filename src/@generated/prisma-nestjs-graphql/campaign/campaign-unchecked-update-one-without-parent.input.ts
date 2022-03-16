import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutParentInput } from './campaign-create-without-parent.input';
import { CampaignCreateOrConnectWithoutParentInput } from './campaign-create-or-connect-without-parent.input';
import { CampaignUpsertWithoutParentInput } from './campaign-upsert-without-parent.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignUpdateWithoutParentInput } from './campaign-update-without-parent.input';

@InputType()
export class CampaignUncheckedUpdateOneWithoutParentInput {

    @Field(() => CampaignCreateWithoutParentInput, {nullable:true})
    create?: CampaignCreateWithoutParentInput;

    @Field(() => CampaignCreateOrConnectWithoutParentInput, {nullable:true})
    connectOrCreate?: CampaignCreateOrConnectWithoutParentInput;

    @Field(() => CampaignUpsertWithoutParentInput, {nullable:true})
    upsert?: CampaignUpsertWithoutParentInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CampaignWhereUniqueInput, {nullable:true})
    connect?: CampaignWhereUniqueInput;

    @Field(() => CampaignUpdateWithoutParentInput, {nullable:true})
    update?: CampaignUpdateWithoutParentInput;
}
