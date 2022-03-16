import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignRoleWhereInput } from './campaign-role-where.input';
import { CampaignRoleOrderByWithRelationInput } from './campaign-role-order-by-with-relation.input';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampaignRoleCountAggregateInput } from './campaign-role-count-aggregate.input';
import { CampaignRoleAvgAggregateInput } from './campaign-role-avg-aggregate.input';
import { CampaignRoleSumAggregateInput } from './campaign-role-sum-aggregate.input';
import { CampaignRoleMinAggregateInput } from './campaign-role-min-aggregate.input';
import { CampaignRoleMaxAggregateInput } from './campaign-role-max-aggregate.input';

@ArgsType()
export class CampaignRoleAggregateArgs {

    @Field(() => CampaignRoleWhereInput, {nullable:true})
    where?: CampaignRoleWhereInput;

    @Field(() => [CampaignRoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CampaignRoleOrderByWithRelationInput>;

    @Field(() => CampaignRoleWhereUniqueInput, {nullable:true})
    cursor?: CampaignRoleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CampaignRoleCountAggregateInput, {nullable:true})
    _count?: CampaignRoleCountAggregateInput;

    @Field(() => CampaignRoleAvgAggregateInput, {nullable:true})
    _avg?: CampaignRoleAvgAggregateInput;

    @Field(() => CampaignRoleSumAggregateInput, {nullable:true})
    _sum?: CampaignRoleSumAggregateInput;

    @Field(() => CampaignRoleMinAggregateInput, {nullable:true})
    _min?: CampaignRoleMinAggregateInput;

    @Field(() => CampaignRoleMaxAggregateInput, {nullable:true})
    _max?: CampaignRoleMaxAggregateInput;
}
