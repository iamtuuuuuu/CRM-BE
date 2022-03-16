import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerCreateWithoutProblemInput } from './customer-create-without-problem.input';

@InputType()
export class CustomerCreateOrConnectWithoutProblemInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerCreateWithoutProblemInput, {nullable:false})
    create!: CustomerCreateWithoutProblemInput;
}
