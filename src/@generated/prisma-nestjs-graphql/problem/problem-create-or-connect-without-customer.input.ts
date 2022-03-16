import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { ProblemCreateWithoutCustomerInput } from './problem-create-without-customer.input';

@InputType()
export class ProblemCreateOrConnectWithoutCustomerInput {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    where!: ProblemWhereUniqueInput;

    @Field(() => ProblemCreateWithoutCustomerInput, {nullable:false})
    create!: ProblemCreateWithoutCustomerInput;
}
