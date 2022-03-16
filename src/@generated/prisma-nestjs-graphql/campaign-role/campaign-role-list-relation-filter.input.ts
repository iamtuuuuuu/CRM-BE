import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleWhereInput } from './campaign-role-where.input';

@InputType()
export class CampaignRoleListRelationFilter {

    @Field(() => CampaignRoleWhereInput, {nullable:true})
    every?: CampaignRoleWhereInput;

    @Field(() => CampaignRoleWhereInput, {nullable:true})
    some?: CampaignRoleWhereInput;

    @Field(() => CampaignRoleWhereInput, {nullable:true})
    none?: CampaignRoleWhereInput;
}
