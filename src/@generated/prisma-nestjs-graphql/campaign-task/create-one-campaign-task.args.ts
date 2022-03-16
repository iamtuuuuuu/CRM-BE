import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignTaskCreateInput } from './campaign-task-create.input';

@ArgsType()
export class CreateOneCampaignTaskArgs {

    @Field(() => CampaignTaskCreateInput, {nullable:false})
    data!: CampaignTaskCreateInput;
}
