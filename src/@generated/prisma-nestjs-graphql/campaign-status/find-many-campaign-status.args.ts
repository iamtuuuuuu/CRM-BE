import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignStatusWhereInput } from './campaign-status-where.input';
import { CampaignStatusOrderByWithRelationInput } from './campaign-status-order-by-with-relation.input';
import { CampaignStatusWhereUniqueInput } from './campaign-status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampaignStatusScalarFieldEnum } from './campaign-status-scalar-field.enum';

@ArgsType()
export class FindManyCampaignStatusArgs {

    @Field(() => CampaignStatusWhereInput, {nullable:true})
    where?: CampaignStatusWhereInput;

    @Field(() => [CampaignStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CampaignStatusOrderByWithRelationInput>;

    @Field(() => CampaignStatusWhereUniqueInput, {nullable:true})
    cursor?: CampaignStatusWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CampaignStatusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CampaignStatusScalarFieldEnum>;
}
