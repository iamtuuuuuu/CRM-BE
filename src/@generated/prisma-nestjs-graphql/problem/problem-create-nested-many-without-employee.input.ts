import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProblemCreateWithoutEmployeeInput } from './problem-create-without-employee.input';
import { ProblemCreateOrConnectWithoutEmployeeInput } from './problem-create-or-connect-without-employee.input';
import { ProblemCreateManyEmployeeInputEnvelope } from './problem-create-many-employee-input-envelope.input';
import { ProblemWhereUniqueInput } from './problem-where-unique.input';

@InputType()
export class ProblemCreateNestedManyWithoutEmployeeInput {

    @Field(() => [ProblemCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<ProblemCreateWithoutEmployeeInput>;

    @Field(() => [ProblemCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<ProblemCreateOrConnectWithoutEmployeeInput>;

    @Field(() => ProblemCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: ProblemCreateManyEmployeeInputEnvelope;

    @Field(() => [ProblemWhereUniqueInput], {nullable:true})
    connect?: Array<ProblemWhereUniqueInput>;
}
