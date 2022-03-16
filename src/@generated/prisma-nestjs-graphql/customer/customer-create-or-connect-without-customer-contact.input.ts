import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerCreateWithoutCustomerContactInput } from './customer-create-without-customer-contact.input';

@InputType()
export class CustomerCreateOrConnectWithoutCustomerContactInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerCreateWithoutCustomerContactInput, {nullable:false})
    create!: CustomerCreateWithoutCustomerContactInput;
}
