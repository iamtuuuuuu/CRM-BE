import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignTaskWhereInput } from './campaign-task-where.input';
import { CampaignTaskOrderByWithAggregationInput } from './campaign-task-order-by-with-aggregation.input';
import { CampaignTaskScalarFieldEnum } from './campaign-task-scalar-field.enum';
import { CampaignTaskScalarWhereWithAggregatesInput } from './campaign-task-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CampaignTaskCountAggregateInput } from './campaign-task-count-aggregate.input';
import { CampaignTaskAvgAggregateInput } from './campaign-task-avg-aggregate.input';
import { CampaignTaskSumAggregateInput } from './campaign-task-sum-aggregate.input';
import { CampaignTaskMinAggregateInput } from './campaign-task-min-aggregate.input';
import { CampaignTaskMaxAggregateInput } from './campaign-task-max-aggregate.input';

@ArgsType()
export class CampaignTaskGroupByArgs {

    @Field(() => CampaignTaskWhereInput, {nullable:true})
    where?: CampaignTaskWhereInput;

    @Field(() => [CampaignTaskOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CampaignTaskOrderByWithAggregationInput>;

    @Field(() => [CampaignTaskScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CampaignTaskScalarFieldEnum>;

    @Field(() => CampaignTaskScalarWhereWithAggregatesInput, {nullable:true})
    having?: CampaignTaskScalarWhereWithAggregatesInput;

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
