import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerContactWhereUniqueInput } from './customer-contact-where-unique.input';
import { CustomerContactCreateWithoutCustomerInput } from './customer-contact-create-without-customer.input';

@InputType()
export class CustomerContactCreateOrConnectWithoutCustomerInput {

    @Field(() => CustomerContactWhereUniqueInput, {nullable:false})
    where!: CustomerContactWhereUniqueInput;

    @Field(() => CustomerContactCreateWithoutCustomerInput, {nullable:false})
    create!: CustomerContactCreateWithoutCustomerInput;
}
