import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignTaskWhereInput } from './campaign-task-where.input';
import { CampaignTaskOrderByWithRelationInput } from './campaign-task-order-by-with-relation.input';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampaignTaskCountAggregateInput } from './campaign-task-count-aggregate.input';
import { CampaignTaskAvgAggregateInput } from './campaign-task-avg-aggregate.input';
import { CampaignTaskSumAggregateInput } from './campaign-task-sum-aggregate.input';
import { CampaignTaskMinAggregateInput } from './campaign-task-min-aggregate.input';
import { CampaignTaskMaxAggregateInput } from './campaign-task-max-aggregate.input';

@ArgsType()
export class CampaignTaskAggregateArgs {

    @Field(() => CampaignTaskWhereInput, {nullable:true})
    where?: CampaignTaskWhereInput;

    @Field(() => [CampaignTaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CampaignTaskOrderByWithRelationInput>;

    @Field(() => CampaignTaskWhereUniqueInput, {nullable:true})
    cursor?: CampaignTaskWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CampaignTaskCountAggregateInput, {nullable:true})
    _count?: CampaignTaskCountAggregateInput;

    @Field(() => CampaignTaskAvgAggregateInput, {nullable:true})
    _avg?: CampaignTaskAvgAggregateInput;

    @Field(() => CampaignTaskSumAggregateInput, {nullable:true})
    _sum?: CampaignTaskSumAggregateInput;

    @Field(() => CampaignTaskMinAggregateInput, {nullable:true})
    _min?: CampaignTaskMinAggregateInput;

    @Field(() => CampaignTaskMaxAggregateInput, {nullable:true})
    _max?: CampaignTaskMaxAggregateInput;
}
