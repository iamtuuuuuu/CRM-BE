import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutProblemInput } from './customer-create-without-problem.input';
import { CustomerCreateOrConnectWithoutProblemInput } from './customer-create-or-connect-without-problem.input';
import { CustomerUpsertWithoutProblemInput } from './customer-upsert-without-problem.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithoutProblemInput } from './customer-update-without-problem.input';

@InputType()
export class CustomerUpdateOneRequiredWithoutProblemInput {

    @Field(() => CustomerCreateWithoutProblemInput, {nullable:true})
    create?: CustomerCreateWithoutProblemInput;

    @Field(() => CustomerCreateOrConnectWithoutProblemInput, {nullable:true})
    connectOrCreate?: CustomerCreateOrConnectWithoutProblemInput;

    @Field(() => CustomerUpsertWithoutProblemInput, {nullable:true})
    upsert?: CustomerUpsertWithoutProblemInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    connect?: CustomerWhereUniqueInput;

    @Field(() => CustomerUpdateWithoutProblemInput, {nullable:true})
    update?: CustomerUpdateWithoutProblemInput;
}
