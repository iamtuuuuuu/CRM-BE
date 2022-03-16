import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleCreateWithoutEmployeeInput } from './employee-role-create-without-employee.input';
import { EmployeeRoleCreateOrConnectWithoutEmployeeInput } from './employee-role-create-or-connect-without-employee.input';
import { EmployeeRoleUpsertWithWhereUniqueWithoutEmployeeInput } from './employee-role-upsert-with-where-unique-without-employee.input';
import { EmployeeRoleCreateManyEmployeeInputEnvelope } from './employee-role-create-many-employee-input-envelope.input';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';
import { EmployeeRoleUpdateWithWhereUniqueWithoutEmployeeInput } from './employee-role-update-with-where-unique-without-employee.input';
import { EmployeeRoleUpdateManyWithWhereWithoutEmployeeInput } from './employee-role-update-many-with-where-without-employee.input';
import { EmployeeRoleScalarWhereInput } from './employee-role-scalar-where.input';

@InputType()
export class EmployeeRoleUpdateManyWithoutEmployeeInput {

    @Field(() => [EmployeeRoleCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<EmployeeRoleCreateWithoutEmployeeInput>;

    @Field(() => [EmployeeRoleCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<EmployeeRoleCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [EmployeeRoleUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    upsert?: Array<EmployeeRoleUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => EmployeeRoleCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: EmployeeRoleCreateManyEmployeeInputEnvelope;

    @Field(() => [EmployeeRoleWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeRoleWhereUniqueInput>;

    @Field(() => [EmployeeRoleWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeRoleWhereUniqueInput>;

    @Field(() => [EmployeeRoleWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeRoleWhereUniqueInput>;

    @Field(() => [EmployeeRoleWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeRoleWhereUniqueInput>;

    @Field(() => [EmployeeRoleUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    update?: Array<EmployeeRoleUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [EmployeeRoleUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    updateMany?: Array<EmployeeRoleUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [EmployeeRoleScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeRoleScalarWhereInput>;
}
