import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerContactCreateManyInput } from './customer-contact-create-many.input';

@ArgsType()
export class CreateManyCustomerContactArgs {

    @Field(() => [CustomerContactCreateManyInput], {nullable:false})
    data!: Array<CustomerContactCreateManyInput>;
}
