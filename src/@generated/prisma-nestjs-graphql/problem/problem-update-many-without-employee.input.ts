import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateWithoutEmployeeInput } from './problem-create-without-employee.input';
import { ProblemCreateOrConnectWithoutEmployeeInput } from './problem-create-or-connect-without-employee.input';
import { ProblemUpsertWithWhereUniqueWithoutEmployeeInput } from './problem-upsert-with-where-unique-without-employee.input';
import { ProblemCreateManyEmployeeInputEnvelope } from './problem-create-many-employee-input-envelope.input';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';
import { ProblemUpdateWithWhereUniqueWithoutEmployeeInput } from './problem-update-with-where-unique-without-employee.input';
import { ProblemUpdateManyWithWhereWithoutEmployeeInput } from './problem-update-many-with-where-without-employee.input';
import { ProblemScalarWhereInput } from './problem-scalar-where.input';

@InputType()
export class ProblemUpdateManyWithoutEmployeeInput {

    @Field(() => [ProblemCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<ProblemCreateWithoutEmployeeInput>;

    @Field(() => [ProblemCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<ProblemCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [ProblemUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    upsert?: Array<ProblemUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => ProblemCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: ProblemCreateManyEmployeeInputEnvelope;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    set?: Array<ProblemWhereUniqueInput>;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProblemWhereUniqueInput>;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    delete?: Array<ProblemWhereUniqueInput>;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    connect?: Array<ProblemWhereUniqueInput>;

    @Field(() => [ProblemUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    update?: Array<ProblemUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [ProblemUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    updateMany?: Array<ProblemUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [ProblemScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProblemScalarWhereInput>;
}
