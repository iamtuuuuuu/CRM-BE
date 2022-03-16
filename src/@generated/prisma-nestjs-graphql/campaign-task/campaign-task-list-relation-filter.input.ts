import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskWhereInput } from './campaign-task-where.input';

@InputType()
export class CampaignTaskListRelationFilter {

    @Field(() => CampaignTaskWhereInput, {nullable:true})
    every?: CampaignTaskWhereInput;

    @Field(() => CampaignTaskWhereInput, {nullable:true})
    some?: CampaignTaskWhereInput;

    @Field(() => CampaignTaskWhereInput, {nullable:true})
    none?: CampaignTaskWhereInput;
}
