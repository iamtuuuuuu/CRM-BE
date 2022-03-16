import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignTaskCreateManyTaskInput } from './campaign-task-create-many-task.input';

@InputType()
export class CampaignTaskCreateManyTaskInputEnvelope {

    @Field(() => [CampaignTaskCreateManyTaskInput], {nullable:false})
    data!: Array<CampaignTaskCreateManyTaskInput>;
}
