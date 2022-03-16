import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignTaskWhereInput } from './campaign-task-where.input';
import { CampaignTaskOrderByWithRelationInput } from './campaign-task-order-by-with-relation.input';
import { CampaignTaskWhereUniqueInput } from './campaign-task-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampaignTaskScalarFieldEnum } from './campaign-task-scalar-field.enum';

@ArgsType()
export class FindFirstCampaignTaskArgs {

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

    @Field(() => [CampaignTaskScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CampaignTaskScalarFieldEnum>;
}
