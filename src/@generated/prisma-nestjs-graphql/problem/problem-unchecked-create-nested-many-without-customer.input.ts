import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateWithoutCustomerInput } from './problem-create-without-customer.input';
import { ProblemCreateOrConnectWithoutCustomerInput } from './problem-create-or-connect-without-customer.input';
import { ProblemCreateManyCustomerInputEnvelope } from './problem-create-many-customer-input-envelope.input';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';

@InputType()
export class ProblemUncheckedCreateNestedManyWithoutCustomerInput {

    @Field(() => [ProblemCreateWithoutCustomerInput], {nullable:true})
    create?: Array<ProblemCreateWithoutCustomerInput>;

    @Field(() => [ProblemCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<ProblemCreateOrConnectWithoutCustomerInput>;

    @Field(() => ProblemCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: ProblemCreateManyCustomerInputEnvelope;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    connect?: Array<ProblemWhereUniqueInput>;
}
