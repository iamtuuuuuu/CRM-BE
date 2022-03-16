import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateWithoutCustomerInput } from './problem-create-without-customer.input';
import { ProblemCreateOrConnectWithoutCustomerInput } from './problem-create-or-connect-without-customer.input';
import { ProblemUpsertWithWhereUniqueWithoutCustomerInput } from './problem-upsert-with-where-unique-without-customer.input';
import { ProblemCreateManyCustomerInputEnvelope } from './problem-create-many-customer-input-envelope.input';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { ProblemUpdateWithWhereUniqueWithoutCustomerInput } from './problem-update-with-where-unique-without-customer.input';
import { ProblemUpdateManyWithWhereWithoutCustomerInput } from './problem-update-many-with-where-without-customer.input';
import { ProblemScalarWhereInput } from './problem-scalar-where.input';

@InputType()
export class ProblemUpdateManyWithoutCustomerInput {

    @Field(() => [ProblemCreateWithoutCustomerInput], {nullable:true})
    create?: Array<ProblemCreateWithoutCustomerInput>;

    @Field(() => [ProblemCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<ProblemCreateOrConnectWithoutCustomerInput>;

    @Field(() => [ProblemUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    upsert?: Array<ProblemUpsertWithWhereUniqueWithoutCustomerInput>;

    @Field(() => ProblemCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: ProblemCreateManyCustomerInputEnvelope;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    set?: Array<ProblemWhereUniqueInput>;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProblemWhereUniqueInput>;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    delete?: Array<ProblemWhereUniqueInput>;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    connect?: Array<ProblemWhereUniqueInput>;

    @Field(() => [ProblemUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    update?: Array<ProblemUpdateWithWhereUniqueWithoutCustomerInput>;

    @Field(() => [ProblemUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    updateMany?: Array<ProblemUpdateManyWithWhereWithoutCustomerInput>;

    @Field(() => [ProblemScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProblemScalarWhereInput>;
}
