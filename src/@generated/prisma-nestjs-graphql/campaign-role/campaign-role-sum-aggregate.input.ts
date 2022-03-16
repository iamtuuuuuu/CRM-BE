import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CampaignRoleSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    campaignId?: true;

    @Field(() => Boolean, {nullable:true})
    roleId?: true;
}
