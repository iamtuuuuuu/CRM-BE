import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomerCampaignUncheckedCreateNestedManyWithoutCustomerInput } from '../customer-campaign/customer-campaign-unchecked-create-nested-many-without-customer.input';
import { ProblemUncheckedCreateNestedManyWithoutCustomerInput } from '../problem/problem-unchecked-create-nested-many-without-customer.input';

@InputType()
export class CustomerUncheckedCreateWithoutEmailSentInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => Date, {nullable:false})
    dob!: Date | string;

    @Field(() => String, {nullable:false})
    gender!: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Int, {nullable:false})
    customerContactId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => CustomerCampaignUncheckedCreateNestedManyWithoutCustomerInput, {nullable:true})
    CustomerCampaign?: CustomerCampaignUncheckedCreateNestedManyWithoutCustomerInput;

    @Field(() => ProblemUncheckedCreateNestedManyWithoutCustomerInput, {nullable:true})
    Problem?: ProblemUncheckedCreateNestedManyWithoutCustomerInput;
}
