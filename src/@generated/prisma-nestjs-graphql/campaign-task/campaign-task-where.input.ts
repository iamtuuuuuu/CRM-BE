import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { CampaignRelationFilter } from '../campaign/campaign-relation-filter.input';
import { TaskRelationFilter } from '../task/task-relation-filter.input';

@InputType()
export class CampaignTaskWhereInput {

    @Field(() => [CampaignTaskWhereInput], {nullable:true})
    AND?: Array<CampaignTaskWhereInput>;

    @Field(() => [CampaignTaskWhereInput], {nullable:true})
    OR?: Array<CampaignTaskWhereInput>;

    @Field(() => [CampaignTaskWhereInput], {nullable:true})
    NOT?: Array<CampaignTaskWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    campaignId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    taskId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDone?: BoolFilter;

    @Field(() => CampaignRelationFilter, {nullable:true})
    campaign?: CampaignRelationFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    task?: TaskRelationFilter;
}
