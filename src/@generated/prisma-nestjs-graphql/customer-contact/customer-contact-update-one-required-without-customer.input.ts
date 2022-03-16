import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerContactCreateWithoutCustomerInput } from './customer-contact-create-without-customer.input';
import { CustomerContactCreateOrConnectWithoutCustomerInput } from './customer-contact-create-or-connect-without-customer.input';
import { CustomerContactUpsertWithoutCustomerInput } from './customer-contact-upsert-without-customer.input';
import { CustomerContactWhereUniqueInput } from './customer-contact-where-unique.input';
import { CustomerContactUpdateWithoutCustomerInput } from './customer-contact-update-without-customer.input';

@InputType()
export class CustomerContactUpdateOneRequiredWithoutCustomerInput {

    @Field(() => CustomerContactCreateWithoutCustomerInput, {nullable:true})
    create?: CustomerContactCreateWithoutCustomerInput;

    @Field(() => CustomerContactCreateOrConnectWithoutCustomerInput, {nullable:true})
    connectOrCreate?: CustomerContactCreateOrConnectWithoutCustomerInput;

    @Field(() => CustomerContactUpsertWithoutCustomerInput, {nullable:true})
    upsert?: CustomerContactUpsertWithoutCustomerInput;

    @Field(() => CustomerContactWhereUniqueInput, {nullable:true})
    connect?: CustomerContactWhereUniqueInput;

    @Field(() => CustomerContactUpdateWithoutCustomerInput, {nullable:true})
    update?: CustomerContactUpdateWithoutCustomerInput;
}
