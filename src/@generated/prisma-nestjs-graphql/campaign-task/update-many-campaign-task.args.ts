import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignTaskUpdateManyMutationInput } from './campaign-task-update-many-mutation.input';
import { CampaignTaskWhereInput } from './campaign-task-where.input';

@ArgsType()
export class UpdateManyCampaignTaskArgs {

    @Field(() => CampaignTaskUpdateManyMutationInput, {nullable:false})
    data!: CampaignTaskUpdateManyMutationInput;

    @Field(() => CampaignTaskWhereInput, {nullable:true})
    where?: CampaignTaskWhereInput;
}
