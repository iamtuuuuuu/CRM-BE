import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignRoleWhereInput } from './campaign-role-where.input';

@ArgsType()
export class DeleteManyCampaignRoleArgs {

    @Field(() => CampaignRoleWhereInput, {nullable:true})
    where?: CampaignRoleWhereInput;
}
