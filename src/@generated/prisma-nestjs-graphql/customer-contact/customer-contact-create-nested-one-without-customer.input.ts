import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerContactCreateWithoutCustomerInput } from './customer-contact-create-without-customer.input';
import { CustomerContactCreateOrConnectWithoutCustomerInput } from './customer-contact-create-or-connect-without-customer.input';
import { CustomerContactWhereUniqueInput } from './customer-contact-where-unique.input';

@InputType()
export class CustomerContactCreateNestedOneWithoutCustomerInput {

    @Field(() => CustomerContactCreateWithoutCustomerInput, {nullable:true})
    create?: CustomerContactCreateWithoutCustomerInput;

    @Field(() => CustomerContactCreateOrConnectWithoutCustomerInput, {nullable:true})
    connectOrCreate?: CustomerContactCreateOrConnectWithoutCustomerInput;

    @Field(() => CustomerContactWhereUniqueInput, {nullable:true})
    connect?: CustomerContactWhereUniqueInput;
}
