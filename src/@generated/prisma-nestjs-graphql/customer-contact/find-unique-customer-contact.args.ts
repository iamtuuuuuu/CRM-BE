import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerContactWhereUniqueInput } from './customer-contact-where-unique.input';

@ArgsType()
export class FindUniqueCustomerContactArgs {

    @Field(() => CustomerContactWhereUniqueInput, {nullable:false})
    where!: CustomerContactWhereUniqueInput;
}
