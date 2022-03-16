import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithoutCustomerContactInput } from './customer-update-without-customer-contact.input';

@InputType()
export class CustomerUpdateWithWhereUniqueWithoutCustomerContactInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerUpdateWithoutCustomerContactInput, {nullable:false})
    data!: CustomerUpdateWithoutCustomerContactInput;
}
