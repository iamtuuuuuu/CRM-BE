import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { CustomerContactRelationFilter } from '../customer-contact/customer-contact-relation-filter.input';
import { CustomerCampaignListRelationFilter } from '../customer-campaign/customer-campaign-list-relation-filter.input';
import { EmailSentListRelationFilter } from '../email-sent/email-sent-list-relation-filter.input';
import { ProblemListRelationFilter } from '../problem/problem-list-relation-filter.input';

@InputType()
export class CustomerWhereInput {

    @Field(() => [CustomerWhereInput], {nullable:true})
    AND?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    OR?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    NOT?: Array<CustomerWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dob?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    gender?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    customerContactId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => CustomerContactRelationFilter, {nullable:true})
    CustomerContact?: CustomerContactRelationFilter;

    @Field(() => CustomerCampaignListRelationFilter, {nullable:true})
    CustomerCampaign?: CustomerCampaignListRelationFilter;

    @Field(() => EmailSentListRelationFilter, {nullable:true})
    EmailSent?: EmailSentListRelationFilter;

    @Field(() => ProblemListRelationFilter, {nullable:true})
    Problem?: ProblemListRelationFilter;
}
