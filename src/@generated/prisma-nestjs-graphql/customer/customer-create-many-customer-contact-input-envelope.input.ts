import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateManyCustomerContactInput } from './customer-create-many-customer-contact.input';

@InputType()
export class CustomerCreateManyCustomerContactInputEnvelope {

    @Field(() => [CustomerCreateManyCustomerContactInput], {nullable:false})
    data!: Array<CustomerCreateManyCustomerContactInput>;
}
