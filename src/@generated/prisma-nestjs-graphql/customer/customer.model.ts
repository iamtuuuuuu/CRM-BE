import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomerContact } from '../customer-contact/customer-contact.model';
import { CustomerCampaign } from '../customer-campaign/customer-campaign.model';
import { EmailSent } from '../email-sent/email-sent.model';
import { Problem } from '../problem/problem.model';
import { CustomerCount } from './customer-count.output';

@ObjectType()
export class Customer {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => Date, {nullable:false})
    dob!: Date;

    @Field(() => String, {nullable:false})
    gender!: string;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => Int, {nullable:false})
    customerContactId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => CustomerContact, {nullable:false})
    CustomerContact?: CustomerContact;

    @Field(() => [CustomerCampaign], {nullable:true})
    CustomerCampaign?: Array<CustomerCampaign>;

    @Field(() => [EmailSent], {nullable:true})
    EmailSent?: Array<EmailSent>;

    @Field(() => [Problem], {nullable:true})
    Problem?: Array<Problem>;

    @Field(() => CustomerCount, {nullable:false})
    _count?: CustomerCount;
}
