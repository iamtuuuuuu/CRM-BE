import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignTaskCreateManyInput } from './campaign-task-create-many.input';

@ArgsType()
export class CreateManyCampaignTaskArgs {

    @Field(() => [CampaignTaskCreateManyInput], {nullable:false})
    data!: Array<CampaignTaskCreateManyInput>;
}
