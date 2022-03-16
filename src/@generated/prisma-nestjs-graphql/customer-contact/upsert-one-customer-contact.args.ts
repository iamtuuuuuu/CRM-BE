import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerContactWhereUniqueInput } from './customer-contact-where-unique.input';
import { CustomerContactCreateInput } from './customer-contact-create.input';
import { CustomerContactUpdateInput } from './customer-contact-update.input';

@ArgsType()
export class UpsertOneCustomerContactArgs {

    @Field(() => CustomerContactWhereUniqueInput, {nullable:false})
    where!: CustomerContactWhereUniqueInput;

    @Field(() => CustomerContactCreateInput, {nullable:false})
    create!: CustomerContactCreateInput;

    @Field(() => CustomerContactUpdateInput, {nullable:false})
    update!: CustomerContactUpdateInput;
}
