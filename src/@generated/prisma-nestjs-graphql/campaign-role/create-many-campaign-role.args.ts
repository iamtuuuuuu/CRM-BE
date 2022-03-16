import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampaignRoleCreateManyInput } from './campaign-role-create-many.input';

@ArgsType()
export class CreateManyCampaignRoleArgs {

    @Field(() => [CampaignRoleCreateManyInput], {nullable:false})
    data!: Array<CampaignRoleCreateManyInput>;
}
