import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { CampaignRelationFilter } from '../campaign/campaign-relation-filter.input';
import { CustomerRelationFilter } from '../customer/customer-relation-filter.input';

@InputType()
export class CustomerCampaignWhereInput {

    @Field(() => [CustomerCampaignWhereInput], {nullable:true})
    AND?: Array<CustomerCampaignWhereInput>;

    @Field(() => [CustomerCampaignWhereInput], {nullable:true})
    OR?: Array<CustomerCampaignWhereInput>;

    @Field(() => [CustomerCampaignWhereInput], {nullable:true})
    NOT?: Array<CustomerCampaignWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    customerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    campaignId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    note?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => CampaignRelationFilter, {nullable:true})
    campaign?: CampaignRelationFilter;

    @Field(() => CustomerRelationFilter, {nullable:true})
    customer?: CustomerRelationFilter;
}
