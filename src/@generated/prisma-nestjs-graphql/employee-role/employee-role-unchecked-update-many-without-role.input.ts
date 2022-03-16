import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleCreateWithoutRoleInput } from './employee-role-create-without-role.input';
import { EmployeeRoleCreateOrConnectWithoutRoleInput } from './employee-role-create-or-connect-without-role.input';
import { EmployeeRoleUpsertWithWhereUniqueWithoutRoleInput } from './employee-role-upsert-with-where-unique-without-role.input';
import { EmployeeRoleCreateManyRoleInputEnvelope } from './employee-role-create-many-role-input-envelope.input';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';
import { EmployeeRoleUpdateWithWhereUniqueWithoutRoleInput } from './employee-role-update-with-where-unique-without-role.input';
import { EmployeeRoleUpdateManyWithWhereWithoutRoleInput } from './employee-role-update-many-with-where-without-role.input';
import { EmployeeRoleScalarWhereInput } from './employee-role-scalar-where.input';

@InputType()
export class EmployeeRoleUncheckedUpdateManyWithoutRoleInput {

    @Field(() => [EmployeeRoleCreateWithoutRoleInput], {nullable:true})
    create?: Array<EmployeeRoleCreateWithoutRoleInput>;

    @Field(() => [EmployeeRoleCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<EmployeeRoleCreateOrConnectWithoutRoleInput>;

    @Field(() => [EmployeeRoleUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    upsert?: Array<EmployeeRoleUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => EmployeeRoleCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: EmployeeRoleCreateManyRoleInputEnvelope;

    @Field(() => [EmployeeRoleWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeRoleWhereUniqueInput>;

    @Field(() => [EmployeeRoleWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeRoleWhereUniqueInput>;

    @Field(() => [EmployeeRoleWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeRoleWhereUniqueInput>;

    @Field(() => [EmployeeRoleWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeRoleWhereUniqueInput>;

    @Field(() => [EmployeeRoleUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    update?: Array<EmployeeRoleUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [EmployeeRoleUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    updateMany?: Array<EmployeeRoleUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [EmployeeRoleScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeRoleScalarWhereInput>;
}
