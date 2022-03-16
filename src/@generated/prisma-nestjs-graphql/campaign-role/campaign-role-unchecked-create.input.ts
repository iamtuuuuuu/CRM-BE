import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CampaignRoleUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    campaignId!: number;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
