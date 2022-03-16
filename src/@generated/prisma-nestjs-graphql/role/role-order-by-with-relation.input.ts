import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampaignRoleOrderByRelationAggregateInput } from '../campaign-role/campaign-role-order-by-relation-aggregate.input';
import { EmployeeRoleOrderByRelationAggregateInput } from '../employee-role/employee-role-order-by-relation-aggregate.input';

@InputType()
export class RoleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => CampaignRoleOrderByRelationAggregateInput, {nullable:true})
    CampaignRole?: CampaignRoleOrderByRelationAggregateInput;

    @Field(() => EmployeeRoleOrderByRelationAggregateInput, {nullable:true})
    EmployeeRole?: EmployeeRoleOrderByRelationAggregateInput;
}
