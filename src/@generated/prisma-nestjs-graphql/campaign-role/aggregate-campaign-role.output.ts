import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampaignRoleCountAggregate } from './campaign-role-count-aggregate.output';
import { CampaignRoleAvgAggregate } from './campaign-role-avg-aggregate.output';
import { CampaignRoleSumAggregate } from './campaign-role-sum-aggregate.output';
import { CampaignRoleMinAggregate } from './campaign-role-min-aggregate.output';
import { CampaignRoleMaxAggregate } from './campaign-role-max-aggregate.output';

@ObjectType()
export class AggregateCampaignRole {

    @Field(() => CampaignRoleCountAggregate, {nullable:true})
    _count?: CampaignRoleCountAggregate;

    @Field(() => CampaignRoleAvgAggregate, {nullable:true})
    _avg?: CampaignRoleAvgAggregate;

    @Field(() => CampaignRoleSumAggregate, {nullable:true})
    _sum?: CampaignRoleSumAggregate;

    @Field(() => CampaignRoleMinAggregate, {nullable:true})
    _min?: CampaignRoleMinAggregate;

    @Field(() => CampaignRoleMaxAggregate, {nullable:true})
    _max?: CampaignRoleMaxAggregate;
}
