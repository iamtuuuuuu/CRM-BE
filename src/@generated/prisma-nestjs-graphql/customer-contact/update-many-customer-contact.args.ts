import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerContactUpdateManyMutationInput } from './customer-contact-update-many-mutation.input';
import { CustomerContactWhereInput } from './customer-contact-where.input';

@ArgsType()
export class UpdateManyCustomerContactArgs {

    @Field(() => CustomerContactUpdateManyMutationInput, {nullable:false})
    data!: CustomerContactUpdateManyMutationInput;

    @Field(() => CustomerContactWhereInput, {nullable:true})
    where?: CustomerContactWhereInput;
}
