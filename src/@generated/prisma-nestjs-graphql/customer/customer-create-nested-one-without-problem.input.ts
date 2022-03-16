import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutProblemInput } from './customer-create-without-problem.input';
import { CustomerCreateOrConnectWithoutProblemInput } from './customer-create-or-connect-without-problem.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedOneWithoutProblemInput {

    @Field(() => CustomerCreateWithoutProblemInput, {nullable:true})
    create?: CustomerCreateWithoutProblemInput;

    @Field(() => CustomerCreateOrConnectWithoutProblemInput, {nullable:true})
    connectOrCreate?: CustomerCreateOrConnectWithoutProblemInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    connect?: CustomerWhereUniqueInput;
}
