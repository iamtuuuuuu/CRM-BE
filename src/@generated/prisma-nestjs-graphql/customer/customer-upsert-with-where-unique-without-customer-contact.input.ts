import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithoutCustomerContactInput } from './customer-update-without-customer-contact.input';
import { CustomerCreateWithoutCustomerContactInput } from './customer-create-without-customer-contact.input';

@InputType()
export class CustomerUpsertWithWhereUniqueWithoutCustomerContactInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerUpdateWithoutCustomerContactInput, {nullable:false})
    update!: CustomerUpdateWithoutCustomerContactInput;

    @Field(() => CustomerCreateWithoutCustomerContactInput, {nullable:false})
    create!: CustomerCreateWithoutCustomerContactInput;
}
