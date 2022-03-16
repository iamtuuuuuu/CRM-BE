import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerCampaignCreateInput } from './customer-campaign-create.input';

@ArgsType()
export class CreateOneCustomerCampaignArgs {

    @Field(() => CustomerCampaignCreateInput, {nullable:false})
    data!: CustomerCampaignCreateInput;
}
