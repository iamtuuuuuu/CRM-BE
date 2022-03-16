import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerCampaignCreateManyInput } from './customer-campaign-create-many.input';

@ArgsType()
export class CreateManyCustomerCampaignArgs {

    @Field(() => [CustomerCampaignCreateManyInput], {nullable:false})
    data!: Array<CustomerCampaignCreateManyInput>;
}
