import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerContactCreateInput } from './customer-contact-create.input';

@ArgsType()
export class CreateOneCustomerContactArgs {

    @Field(() => CustomerContactCreateInput, {nullable:false})
    data!: CustomerContactCreateInput;
}
