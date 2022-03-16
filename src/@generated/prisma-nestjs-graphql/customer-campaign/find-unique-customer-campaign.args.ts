import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerCampaignWhereUniqueInput } from './customer-campaign-where-unique.input';

@ArgsType()
export class FindUniqueCustomerCampaignArgs {

    @Field(() => CustomerCampaignWhereUniqueInput, {nullable:false})
    where!: CustomerCampaignWhereUniqueInput;
}
