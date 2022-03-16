import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { ProblemUpdateWithoutCustomerInput } from './problem-update-without-customer.input';

@InputType()
export class ProblemUpdateWithWhereUniqueWithoutCustomerInput {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    where!: ProblemWhereUniqueInput;

    @Field(() => ProblemUpdateWithoutCustomerInput, {nullable:false})
    data!: ProblemUpdateWithoutCustomerInput;
}
