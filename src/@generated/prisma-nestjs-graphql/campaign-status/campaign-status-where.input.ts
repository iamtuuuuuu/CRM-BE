import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CampaignListRelationFilter } from '../campaign/campaign-list-relation-filter.input';

@InputType()
export class CampaignStatusWhereInput {

    @Field(() => [CampaignStatusWhereInput], {nullable:true})
    AND?: Array<CampaignStatusWhereInput>;

    @Field(() => [CampaignStatusWhereInput], {nullable:true})
    OR?: Array<CampaignStatusWhereInput>;

    @Field(() => [CampaignStatusWhereInput], {nullable:true})
    NOT?: Array<CampaignStatusWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => CampaignListRelationFilter, {nullable:true})
    Campaign?: CampaignListRelationFilter;
}
