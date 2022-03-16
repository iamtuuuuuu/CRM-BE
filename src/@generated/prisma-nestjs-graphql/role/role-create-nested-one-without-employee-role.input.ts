import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutEmployeeRoleInput } from './role-create-without-employee-role.input';
import { RoleCreateOrConnectWithoutEmployeeRoleInput } from './role-create-or-connect-without-employee-role.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutEmployeeRoleInput {

    @Field(() => RoleCreateWithoutEmployeeRoleInput, {nullable:true})
    create?: RoleCreateWithoutEmployeeRoleInput;

    @Field(() => RoleCreateOrConnectWithoutEmployeeRoleInput, {nullable:true})
    connectOrCreate?: RoleCreateOrConnectWithoutEmployeeRoleInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    connect?: RoleWhereUniqueInput;
}
