import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutCustomerContactInput } from './customer-create-without-customer-contact.input';
import { CustomerCreateOrConnectWithoutCustomerContactInput } from './customer-create-or-connect-without-customer-contact.input';
import { CustomerCreateManyCustomerContactInputEnvelope } from './customer-create-many-customer-contact-input-envelope.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedManyWithoutCustomerContactInput {

    @Field(() => [CustomerCreateWithoutCustomerContactInput], {nullable:true})
    create?: Array<CustomerCreateWithoutCustomerContactInput>;

    @Field(() => [CustomerCreateOrConnectWithoutCustomerContactInput], {nullable:true})
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutCustomerContactInput>;

    @Field(() => CustomerCreateManyCustomerContactInputEnvelope, {nullable:true})
    createMany?: CustomerCreateManyCustomerContactInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    connect?: Array<CustomerWhereUniqueInput>;
}
