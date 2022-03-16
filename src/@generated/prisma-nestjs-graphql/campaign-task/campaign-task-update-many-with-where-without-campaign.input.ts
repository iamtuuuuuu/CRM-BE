import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskScalarWhereInput } from './campaign-task-scalar-where.input';
import { CampaignTaskUpdateManyMutationInput } from './campaign-task-update-many-mutation.input';

@InputType()
export class CampaignTaskUpdateManyWithWhereWithoutCampaignInput {

    @Field(() => CampaignTaskScalarWhereInput, {nullable:false})
    where!: CampaignTaskScalarWhereInput;

    @Field(() => CampaignTaskUpdateManyMutationInput, {nullable:false})
    data!: CampaignTaskUpdateManyMutationInput;
}
