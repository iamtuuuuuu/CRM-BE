import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Customer } from '../customer/customer.model';
import { CustomerContactCount } from '../customer/customer-contact-count.output';

@ObjectType()
export class CustomerContact {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    ref!: string | null;

    @Field(() => [Customer], {nullable:true})
    Customer?: Array<Customer>;

    @Field(() => CustomerContactCount, {nullable:false})
    _count?: CustomerContactCount;
}
