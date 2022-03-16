import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerCampaignUpdateManyMutationInput } from './customer-campaign-update-many-mutation.input';
import { CustomerCampaignWhereInput } from './customer-campaign-where.input';

@ArgsType()
export class UpdateManyCustomerCampaignArgs {

    @Field(() => CustomerCampaignUpdateManyMutationInput, {nullable:false})
    data!: CustomerCampaignUpdateManyMutationInput;

    @Field(() => CustomerCampaignWhereInput, {nullable:true})
    where?: CustomerCampaignWhereInput;
}
