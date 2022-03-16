import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';
import { CampaignTaskCreateWithoutCampaignInput } from './campaign-task-create-without-campaign.input';

@InputType()
export class CampaignTaskCreateOrConnectWithoutCampaignInput {

    @Field(() => CampaignTaskWhereUniqueInput, {nullable:false})
    where!: CampaignTaskWhereUniqueInput;

    @Field(() => CampaignTaskCreateWithoutCampaignInput, {nullable:false})
    create!: CampaignTaskCreateWithoutCampaignInput;
}
