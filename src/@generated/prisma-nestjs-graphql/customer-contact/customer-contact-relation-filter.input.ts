import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerContactWhereInput } from './customer-contact-where.input';

@InputType()
export class CustomerContactRelationFilter {

    @Field(() => CustomerContactWhereInput, {nullable:true})
    is?: CustomerContactWhereInput;

    @Field(() => CustomerContactWhereInput, {nullable:true})
    isNot?: CustomerContactWhereInput;
}
