import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerContactWhereInput } from './customer-contact-where.input';
import { CustomerContactOrderByWithRelationInput } from './customer-contact-order-by-with-relation.input';
import { CustomerContactWhereUniqueInput } from './customer-contact-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CustomerContactScalarFieldEnum } from './customer-contact-scalar-field.enum';

@ArgsType()
export class FindFirstCustomerContactArgs {

    @Field(() => CustomerContactWhereInput, {nullable:true})
    where?: CustomerContactWhereInput;

    @Field(() => [CustomerContactOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomerContactOrderByWithRelationInput>;

    @Field(() => CustomerContactWhereUniqueInput, {nullable:true})
    cursor?: CustomerContactWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CustomerContactScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomerContactScalarFieldEnum>;
}
