import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerUpdateManyMutationInput } from './customer-update-many-mutation.input';
import { CustomerWhereInput } from './customer-where.input';

@ArgsType()
export class UpdateManyCustomerArgs {

    @Field(() => CustomerUpdateManyMutationInput, {nullable:false})
    data!: CustomerUpdateManyMutationInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    where?: CustomerWhereInput;
}
