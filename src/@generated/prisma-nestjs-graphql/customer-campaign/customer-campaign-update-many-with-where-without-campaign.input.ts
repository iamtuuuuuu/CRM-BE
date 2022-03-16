import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCampaignScalarWhereInput } from './customer-campaign-scalar-where.input';
import { CustomerCampaignUpdateManyMutationInput } from './customer-campaign-update-many-mutation.input';

@InputType()
export class CustomerCampaignUpdateManyWithWhereWithoutCampaignInput {

    @Field(() => CustomerCampaignScalarWhereInput, {nullable:false})
    where!: CustomerCampaignScalarWhereInput;

    @Field(() => CustomerCampaignUpdateManyMutationInput, {nullable:false})
    data!: CustomerCampaignUpdateManyMutationInput;
}
