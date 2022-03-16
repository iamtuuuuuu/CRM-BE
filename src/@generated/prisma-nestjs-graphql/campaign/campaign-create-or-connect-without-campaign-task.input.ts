import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { CampaignCreateWithoutCampaignTaskInput } from './campaign-create-without-campaign-task.input';

@InputType()
export class CampaignCreateOrConnectWithoutCampaignTaskInput {

    @Field(() => CampaignWhereUniqueInput, {nullable:false})
    where!: CampaignWhereUniqueInput;

    @Field(() => CampaignCreateWithoutCampaignTaskInput, {nullable:false})
    create!: CampaignCreateWithoutCampaignTaskInput;
}
