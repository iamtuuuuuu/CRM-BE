import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateNestedOneWithoutProblemInput } from '../customer/customer-create-nested-one-without-problem.input';

@InputType()
export class ProblemCreateWithoutEmployeeInput {

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => CustomerCreateNestedOneWithoutProblemInput, {nullable:false})
    customer!: CustomerCreateNestedOneWithoutProblemInput;
}
