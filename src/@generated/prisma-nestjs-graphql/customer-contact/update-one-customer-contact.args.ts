import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerContactUpdateInput } from './customer-contact-update.input';
import { CustomerContactWhereUniqueInput } from './customer-contact-where-unique.input';

@ArgsType()
export class UpdateOneCustomerContactArgs {

    @Field(() => CustomerContactUpdateInput, {nullable:false})
    data!: CustomerContactUpdateInput;

    @Field(() => CustomerContactWhereUniqueInput, {nullable:false})
    where!: CustomerContactWhereUniqueInput;
}
