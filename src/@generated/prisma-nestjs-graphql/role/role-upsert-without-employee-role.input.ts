import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutEmployeeRoleInput } from './role-update-without-employee-role.input';
import { RoleCreateWithoutEmployeeRoleInput } from './role-create-without-employee-role.input';

@InputType()
export class RoleUpsertWithoutEmployeeRoleInput {

    @Field(() => RoleUpdateWithoutEmployeeRoleInput, {nullable:false})
    update!: RoleUpdateWithoutEmployeeRoleInput;

    @Field(() => RoleCreateWithoutEmployeeRoleInput, {nullable:false})
    create!: RoleCreateWithoutEmployeeRoleInput;
}
