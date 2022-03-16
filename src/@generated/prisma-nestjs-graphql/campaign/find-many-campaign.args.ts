import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignWhereInput } from './campaign-where.input';
import { CampaignOrderByWithRelationInput } from './campaign-order-by-with-relation.input';
import { CampaignWhereUniqueInput } from './campaign-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampaignScalarFieldEnum } from './campaign-scalar-field.enum';

@ArgsType()
export class FindManyCampaignArgs {

    @Field(() => CampaignWhereInput, {nullable:true})
    where?: CampaignWhereInput;

    @Field(() => [CampaignOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CampaignOrderByWithRelationInput>;

    @Field(() => CampaignWhereUniqueInput, {nullable:true})
    cursor?: CampaignWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CampaignScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CampaignScalarFieldEnum>;
}
