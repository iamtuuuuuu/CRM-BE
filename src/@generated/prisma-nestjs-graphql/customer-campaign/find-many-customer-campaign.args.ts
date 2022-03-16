import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerCampaignWhereInput } from './customer-campaign-where.input';
import { CustomerCampaignOrderByWithRelationInput } from './customer-campaign-order-by-with-relation.input';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CustomerCampaignScalarFieldEnum } from './customer-campaign-scalar-field.enum';

@ArgsType()
export class FindManyCustomerCampaignArgs {

    @Field(() => CustomerCampaignWhereInput, {nullable:true})
    where?: CustomerCampaignWhereInput;

    @Field(() => [CustomerCampaignOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomerCampaignOrderByWithRelationInput>;

    @Field(() => CustomerCampaignWhereUniqueInput, {nullable:true})
    cursor?: CustomerCampaignWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CustomerCampaignScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomerCampaignScalarFieldEnum>;
}
