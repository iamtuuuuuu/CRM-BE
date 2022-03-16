import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerCampaignUpdateInput } from './customer-campaign-update.input';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';

@ArgsType()
export class UpdateOneCustomerCampaignArgs {

    @Field(() => CustomerCampaignUpdateInput, {nullable:false})
    data!: CustomerCampaignUpdateInput;

    @Field(() => CustomerCampaignWhereUniqueInput, {nullable:false})
    where!: CustomerCampaignWhereUniqueInput;
}
