import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignCreateWithoutParentInput } from './campaign-create-without-parent.input';
import { CampaignCreateOrConnectWithoutParentInput } from './campaign-create-or-connect-without-parent.input';
import { CampaignCreateManyParentInputEnvelope } from './campaign-create-many-parent-input-envelope.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';

@InputType()
export class CampaignUncheckedCreateNestedManyWithoutParentInput {

    @Field(() => [CampaignCreateWithoutParentInput], {nullable:true})
    create?: Array<CampaignCreateWithoutParentInput>;

    @Field(() => [CampaignCreateOrConnectWithoutParentInput], {nullable:true})
    connectOrCreate?: Array<CampaignCreateOrConnectWithoutParentInput>;

    @Field(() => CampaignCreateManyParentInputEnvelope, {nullable:true})
    createMany?: CampaignCreateManyParentInputEnvelope;

    @Field(() => [CampaignWhereUniqueInput], {nullable:true})
    connect?: Array<CampaignWhereUniqueInput>;
}
