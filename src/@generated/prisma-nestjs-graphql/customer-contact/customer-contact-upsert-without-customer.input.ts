import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerContactUpdateWithoutCustomerInput } from './customer-contact-update-without-customer.input';
import { CustomerContactCreateWithoutCustomerInput } from './customer-contact-create-without-customer.input';

@InputType()
export class CustomerContactUpsertWithoutCustomerInput {

    @Field(() => CustomerContactUpdateWithoutCustomerInput, {nullable:false})
    update!: CustomerContactUpdateWithoutCustomerInput;

    @Field(() => CustomerContactCreateWithoutCustomerInput, {nullable:false})
    create!: CustomerContactCreateWithoutCustomerInput;
}
