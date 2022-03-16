import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class CustomerCampaignScalarWhereInput {

    @Field(() => [CustomerCampaignScalarWhereInput], {nullable:true})
    AND?: Array<CustomerCampaignScalarWhereInput>;

    @Field(() => [CustomerCampaignScalarWhereInput], {nullable:true})
    OR?: Array<CustomerCampaignScalarWhereInput>;

    @Field(() => [CustomerCampaignScalarWhereInput], {nullable:true})
    NOT?: Array<CustomerCampaignScalarWhereInput>;

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
}
