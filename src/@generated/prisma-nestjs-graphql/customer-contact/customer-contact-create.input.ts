import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateNestedManyWithoutCustomerContactInput } from '../customer/customer-create-nested-many-without-customer-contact.input';

@InputType()
export class CustomerContactCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    ref?: string;

    @Field(() => CustomerCreateNestedManyWithoutCustomerContactInput, {nullable:true})
    Customer?: CustomerCreateNestedManyWithoutCustomerContactInput;
}
