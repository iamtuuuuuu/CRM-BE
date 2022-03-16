import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { CustomerListRelationFilter } from '../customer/customer-list-relation-filter.input';

@InputType()
export class CustomerContactWhereInput {

    @Field(() => [CustomerContactWhereInput], {nullable:true})
    AND?: Array<CustomerContactWhereInput>;

    @Field(() => [CustomerContactWhereInput], {nullable:true})
    OR?: Array<CustomerContactWhereInput>;

    @Field(() => [CustomerContactWhereInput], {nullable:true})
    NOT?: Array<CustomerContactWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ref?: StringNullableFilter;

    @Field(() => CustomerListRelationFilter, {nullable:true})
    Customer?: CustomerListRelationFilter;
}
