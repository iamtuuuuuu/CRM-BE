import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { ProblemUpdateWithoutCustomerInput } from './problem-update-without-customer.input';
import { ProblemCreateWithoutCustomerInput } from './problem-create-without-customer.input';

@InputType()
export class ProblemUpsertWithWhereUniqueWithoutCustomerInput {

    @Field(() => ProblemWhereUniqueInput, {nullable:false})
    where!: ProblemWhereUniqueInput;

    @Field(() => ProblemUpdateWithoutCustomerInput, {nullable:false})
    update!: ProblemUpdateWithoutCustomerInput;

    @Field(() => ProblemCreateWithoutCustomerInput, {nullable:false})
    create!: ProblemCreateWithoutCustomerInput;
}
