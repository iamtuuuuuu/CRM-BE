import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignTaskUpdateInput } from './campaign-task-update.input';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';

@ArgsType()
export class UpdateOneCampaignTaskArgs {

    @Field(() => CampaignTaskUpdateInput, {nullable:false})
    data!: CampaignTaskUpdateInput;

    @Field(() => CampaignTaskWhereUniqueInput, {nullable:false})
    where!: CampaignTaskWhereUniqueInput;
}
