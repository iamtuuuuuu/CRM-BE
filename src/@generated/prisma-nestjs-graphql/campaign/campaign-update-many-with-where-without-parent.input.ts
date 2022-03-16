import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignScalarWhereInput } from './campaign-scalar-where.input';
import { CampaignUpdateManyMutationInput } from './campaign-update-many-mutation.input';

@InputType()
export class CampaignUpdateManyWithWhereWithoutParentInput {

    @Field(() => CampaignScalarWhereInput, {nullable:false})
    where!: CampaignScalarWhereInput;

    @Field(() => CampaignUpdateManyMutationInput, {nullable:false})
    data!: CampaignUpdateManyMutationInput;
}
