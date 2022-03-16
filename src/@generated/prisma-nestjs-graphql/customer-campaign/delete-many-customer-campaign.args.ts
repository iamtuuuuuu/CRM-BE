import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerCampaignWhereInput } from './customer-campaign-where.input';

@ArgsType()
export class DeleteManyCustomerCampaignArgs {

    @Field(() => CustomerCampaignWhereInput, {nullable:true})
    where?: CustomerCampaignWhereInput;
}
