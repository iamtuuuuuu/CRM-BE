import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutEmployeeRoleInput } from './role-create-without-employee-role.input';
import { RoleCreateOrConnectWithoutEmployeeRoleInput } from './role-create-or-connect-without-employee-role.input';
import { RoleUpsertWithoutEmployeeRoleInput } from './role-upsert-without-employee-role.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutEmployeeRoleInput } from './role-update-without-employee-role.input';

@InputType()
export class RoleUpdateOneRequiredWithoutEmployeeRoleInput {

    @Field(() => RoleCreateWithoutEmployeeRoleInput, {nullable:true})
    create?: RoleCreateWithoutEmployeeRoleInput;

    @Field(() => RoleCreateOrConnectWithoutEmployeeRoleInput, {nullable:true})
    connectOrCreate?: RoleCreateOrConnectWithoutEmployeeRoleInput;

    @Field(() => RoleUpsertWithoutEmployeeRoleInput, {nullable:true})
    upsert?: RoleUpsertWithoutEmployeeRoleInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    connect?: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutEmployeeRoleInput, {nullable:true})
    update?: RoleUpdateWithoutEmployeeRoleInput;
}
