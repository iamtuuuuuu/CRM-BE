import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';
import { CampaignTaskCreateInput } from './campaign-task-create.input';
import { CampaignTaskUpdateInput } from './campaign-task-update.input';

@ArgsType()
export class UpsertOneCampaignTaskArgs {

    @Field(() => CampaignTaskWhereUniqueInput, {nullable:false})
    where!: CampaignTaskWhereUniqueInput;

    @Field(() => CampaignTaskCreateInput, {nullable:false})
    create!: CampaignTaskCreateInput;

    @Field(() => CampaignTaskUpdateInput, {nullable:false})
    update!: CampaignTaskUpdateInput;
}
