import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerContactCreateNestedOneWithoutCustomerInput } from '../customer-contact/customer-contact-create-nested-one-without-customer.input';
import { CustomerCampaignCreateNestedManyWithoutCustomerInput } from '../customer-campaign/customer-campaign-create-nested-many-without-customer.input';
import { EmailSentCreateNestedManyWithoutCustomerInput } from '../email-sent/email-sent-create-nested-many-without-customer.input';
import { ProblemCreateNestedManyWithoutCustomerInput } from '../problem/problem-create-nested-many-without-customer.input';

@InputType()
export class CustomerCreateInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => CustomerContactCreateNestedOneWithoutCustomerInput, {nullable:false})
    CustomerContact!: CustomerContactCreateNestedOneWithoutCustomerInput;

    @Field(() => CustomerCampaignCreateNestedManyWithoutCustomerInput, {nullable:true})
    CustomerCampaign?: CustomerCampaignCreateNestedManyWithoutCustomerInput;

    @Field(() => EmailSentCreateNestedManyWithoutCustomerInput, {nullable:true})
    EmailSent?: EmailSentCreateNestedManyWithoutCustomerInput;

    @Field(() => ProblemCreateNestedManyWithoutCustomerInput, {nullable:true})
    Problem?: ProblemCreateNestedManyWithoutCustomerInput;
}
