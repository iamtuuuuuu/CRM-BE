import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignTaskWhereInput } from './campaign-task-where.input';

@ArgsType()
export class DeleteManyCampaignTaskArgs {

    @Field(() => CampaignTaskWhereInput, {nullable:true})
    where?: CampaignTaskWhereInput;
}
