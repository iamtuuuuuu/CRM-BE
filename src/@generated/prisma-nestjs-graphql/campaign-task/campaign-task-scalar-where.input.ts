import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class CampaignTaskScalarWhereInput {

    @Field(() => [CampaignTaskScalarWhereInput], {nullable:true})
    AND?: Array<CampaignTaskScalarWhereInput>;

    @Field(() => [CampaignTaskScalarWhereInput], {nullable:true})
    OR?: Array<CampaignTaskScalarWhereInput>;

    @Field(() => [CampaignTaskScalarWhereInput], {nullable:true})
    NOT?: Array<CampaignTaskScalarWhereInput>;

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
}
