import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignUpdateManyMutationInput } from './campaign-update-many-mutation.input';
import { CampaignWhereInput } from './campaign-where.input';

@ArgsType()
export class UpdateManyCampaignArgs {

    @Field(() => CampaignUpdateManyMutationInput, {nullable:false})
    data!: CampaignUpdateManyMutationInput;

    @Field(() => CampaignWhereInput, {nullable:true})
    where?: CampaignWhereInput;
}
