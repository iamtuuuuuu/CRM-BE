import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class CampaignScalarWhereInput {

    @Field(() => [CampaignScalarWhereInput], {nullable:true})
    AND?: Array<CampaignScalarWhereInput>;

    @Field(() => [CampaignScalarWhereInput], {nullable:true})
    OR?: Array<CampaignScalarWhereInput>;

    @Field(() => [CampaignScalarWhereInput], {nullable:true})
    NOT?: Array<CampaignScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    campaignStatusId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    linkImg?: StringNullableFilter;
}
