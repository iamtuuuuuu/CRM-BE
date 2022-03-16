import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleCreateWithoutEmployeeRoleInput } from './role-create-without-employee-role.input';

@InputType()
export class RoleCreateOrConnectWithoutEmployeeRoleInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutEmployeeRoleInput, {nullable:false})
    create!: RoleCreateWithoutEmployeeRoleInput;
}
