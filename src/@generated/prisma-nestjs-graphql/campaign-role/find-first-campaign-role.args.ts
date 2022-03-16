import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignRoleWhereInput } from './campaign-role-where.input';
import { CampaignRoleOrderByWithRelationInput } from './campaign-role-order-by-with-relation.input';
import { CampaignRoleWhereUniqueInput } from './campaign-role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampaignRoleScalarFieldEnum } from './campaign-role-scalar-field.enum';

@ArgsType()
export class FindFirstCampaignRoleArgs {

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

    @Field(() => [CampaignRoleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CampaignRoleScalarFieldEnum>;
}
