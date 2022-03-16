import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';
import { CustomerUpdateManyMutationInput } from './customer-update-many-mutation.input';

@InputType()
export class CustomerUpdateManyWithWhereWithoutCustomerContactInput {

    @Field(() => CustomerScalarWhereInput, {nullable:false})
    where!: CustomerScalarWhereInput;

    @Field(() => CustomerUpdateManyMutationInput, {nullable:false})
    data!: CustomerUpdateManyMutationInput;
}
