import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutCustomerContactInput } from './customer-create-without-customer-contact.input';
import { CustomerCreateOrConnectWithoutCustomerContactInput } from './customer-create-or-connect-without-customer-contact.input';
import { CustomerUpsertWithWhereUniqueWithoutCustomerContactInput } from './customer-upsert-with-where-unique-without-customer-contact.input';
import { CustomerCreateManyCustomerContactInputEnvelope } from './customer-create-many-customer-contact-input-envelope.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithWhereUniqueWithoutCustomerContactInput } from './customer-update-with-where-unique-without-customer-contact.input';
import { CustomerUpdateManyWithWhereWithoutCustomerContactInput } from './customer-update-many-with-where-without-customer-contact.input';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';

@InputType()
export class CustomerUpdateManyWithoutCustomerContactInput {

    @Field(() => [CustomerCreateWithoutCustomerContactInput], {nullable:true})
    create?: Array<CustomerCreateWithoutCustomerContactInput>;

    @Field(() => [CustomerCreateOrConnectWithoutCustomerContactInput], {nullable:true})
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutCustomerContactInput>;

    @Field(() => [CustomerUpsertWithWhereUniqueWithoutCustomerContactInput], {nullable:true})
    upsert?: Array<CustomerUpsertWithWhereUniqueWithoutCustomerContactInput>;

    @Field(() => CustomerCreateManyCustomerContactInputEnvelope, {nullable:true})
    createMany?: CustomerCreateManyCustomerContactInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    set?: Array<CustomerWhereUniqueInput>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    disconnect?: Array<CustomerWhereUniqueInput>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    delete?: Array<CustomerWhereUniqueInput>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    connect?: Array<CustomerWhereUniqueInput>;

    @Field(() => [CustomerUpdateWithWhereUniqueWithoutCustomerContactInput], {nullable:true})
    update?: Array<CustomerUpdateWithWhereUniqueWithoutCustomerContactInput>;

    @Field(() => [CustomerUpdateManyWithWhereWithoutCustomerContactInput], {nullable:true})
    updateMany?: Array<CustomerUpdateManyWithWhereWithoutCustomerContactInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    deleteMany?: Array<CustomerScalarWhereInput>;
}
