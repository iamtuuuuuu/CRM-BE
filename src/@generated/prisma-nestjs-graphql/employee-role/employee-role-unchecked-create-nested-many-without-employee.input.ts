import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleCreateWithoutEmployeeInput } from './employee-role-create-without-employee.input';
import { EmployeeRoleCreateOrConnectWithoutEmployeeInput } from './employee-role-create-or-connect-without-employee.input';
import { EmployeeRoleCreateManyEmployeeInputEnvelope } from './employee-role-create-many-employee-input-envelope.input';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';

@InputType()
export class EmployeeRoleUncheckedCreateNestedManyWithoutEmployeeInput {

    @Field(() => [EmployeeRoleCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<EmployeeRoleCreateWithoutEmployeeInput>;

    @Field(() => [EmployeeRoleCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<EmployeeRoleCreateOrConnectWithoutEmployeeInput>;

    @Field(() => EmployeeRoleCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: EmployeeRoleCreateManyEmployeeInputEnvelope;

    @Field(() => [EmployeeRoleWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeRoleWhereUniqueInput>;
}
