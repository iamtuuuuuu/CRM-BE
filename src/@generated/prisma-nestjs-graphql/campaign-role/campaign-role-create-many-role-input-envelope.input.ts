import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampaignRoleCreateManyRoleInput } from './campaign-role-create-many-role.input';

@InputType()
export class CampaignRoleCreateManyRoleInputEnvelope {

    @Field(() => [CampaignRoleCreateManyRoleInput], {nullable:false})
    data!: Array<CampaignRoleCreateManyRoleInput>;
}
