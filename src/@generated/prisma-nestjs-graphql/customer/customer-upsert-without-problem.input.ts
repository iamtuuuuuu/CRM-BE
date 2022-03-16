import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerUpdateWithoutProblemInput } from './customer-update-without-problem.input';
import { CustomerCreateWithoutProblemInput } from './customer-create-without-problem.input';

@InputType()
export class CustomerUpsertWithoutProblemInput {

    @Field(() => CustomerUpdateWithoutProblemInput, {nullable:false})
    update!: CustomerUpdateWithoutProblemInput;

    @Field(() => CustomerCreateWithoutProblemInput, {nullable:false})
    create!: CustomerCreateWithoutProblemInput;
}
