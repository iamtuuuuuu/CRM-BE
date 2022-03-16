import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CampaignRoleScalarWhereInput {

    @Field(() => [CampaignRoleScalarWhereInput], {nullable:true})
    AND?: Array<CampaignRoleScalarWhereInput>;

    @Field(() => [CampaignRoleScalarWhereInput], {nullable:true})
    OR?: Array<CampaignRoleScalarWhereInput>;

    @Field(() => [CampaignRoleScalarWhereInput], {nullable:true})
    NOT?: Array<CampaignRoleScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    campaignId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
