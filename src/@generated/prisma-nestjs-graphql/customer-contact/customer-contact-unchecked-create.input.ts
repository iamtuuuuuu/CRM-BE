import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomerUncheckedCreateNestedManyWithoutCustomerContactInput } from '../customer/customer-unchecked-create-nested-many-without-customer-contact.input';

@InputType()
export class CustomerContactUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    ref?: string;

    @Field(() => CustomerUncheckedCreateNestedManyWithoutCustomerContactInput, {nullable:true})
    Customer?: CustomerUncheckedCreateNestedManyWithoutCustomerContactInput;
}
