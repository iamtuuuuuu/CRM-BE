import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerContactWhereInput } from './customer-contact-where.input';

@ArgsType()
export class DeleteManyCustomerContactArgs {

    @Field(() => CustomerContactWhereInput, {nullable:true})
    where?: CustomerContactWhereInput;
}
