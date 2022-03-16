import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutDepartmentInput } from './employee-create-without-department.input';
import { EmployeeCreateOrConnectWithoutDepartmentInput } from './employee-create-or-connect-without-department.input';
import { EmployeeUpsertWithWhereUniqueWithoutDepartmentInput } from './employee-upsert-with-where-unique-without-department.input';
import { EmployeeCreateManyDepartmentInputEnvelope } from './employee-create-many-department-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutDepartmentInput } from './employee-update-with-where-unique-without-department.input';
import { EmployeeUpdateManyWithWhereWithoutDepartmentInput } from './employee-update-many-with-where-without-department.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUncheckedUpdateManyWithoutDepartmentInput {

    @Field(() => [EmployeeCreateWithoutDepartmentInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutDepartmentInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutDepartmentInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutDepartmentInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => EmployeeCreateManyDepartmentInputEnvelope, {nullable:true})
    createMany?: EmployeeCreateManyDepartmentInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutDepartmentInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
