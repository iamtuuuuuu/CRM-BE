import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleCreateWithoutRoleInput } from './employee-role-create-without-role.input';
import { EmployeeRoleCreateOrConnectWithoutRoleInput } from './employee-role-create-or-connect-without-role.input';
import { EmployeeRoleCreateManyRoleInputEnvelope } from './employee-role-create-many-role-input-envelope.input';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';

@InputType()
export class EmployeeRoleCreateNestedManyWithoutRoleInput {

    @Field(() => [EmployeeRoleCreateWithoutRoleInput], {nullable:true})
    create?: Array<EmployeeRoleCreateWithoutRoleInput>;

    @Field(() => [EmployeeRoleCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<EmployeeRoleCreateOrConnectWithoutRoleInput>;

    @Field(() => EmployeeRoleCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: EmployeeRoleCreateManyRoleInputEnvelope;

    @Field(() => [EmployeeRoleWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeRoleWhereUniqueInput>;
}
