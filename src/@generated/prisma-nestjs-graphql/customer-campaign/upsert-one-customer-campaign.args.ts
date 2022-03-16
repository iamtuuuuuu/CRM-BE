import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';
import { CustomerCampaignCreateInput } from './customer-campaign-create.input';
import { CustomerCampaignUpdateInput } from './customer-campaign-update.input';

@ArgsType()
export class UpsertOneCustomerCampaignArgs {

    @Field(() => CustomerCampaignWhereUniqueInput, {nullable:false})
    where!: CustomerCampaignWhereUniqueInput;

    @Field(() => CustomerCampaignCreateInput, {nullable:false})
    create!: CustomerCampaignCreateInput;

    @Field(() => CustomerCampaignUpdateInput, {nullable:false})
    update!: CustomerCampaignUpdateInput;
}
