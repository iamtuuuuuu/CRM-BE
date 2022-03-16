import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignStatusUpdateManyMutationInput } from './campaign-status-update-many-mutation.input';
import { CampaignStatusWhereInput } from './campaign-status-where.input';

@ArgsType()
export class UpdateManyCampaignStatusArgs {

    @Field(() => CampaignStatusUpdateManyMutationInput, {nullable:false})
    data!: CampaignStatusUpdateManyMutationInput;

    @Field(() => CampaignStatusWhereInput, {nullable:true})
    where?: CampaignStatusWhereInput;
}
