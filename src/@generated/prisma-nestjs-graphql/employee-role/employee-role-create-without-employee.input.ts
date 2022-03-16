import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutEmployeeRoleInput } from '../role/role-create-nested-one-without-employee-role.input';

@InputType()
export class EmployeeRoleCreateWithoutEmployeeInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RoleCreateNestedOneWithoutEmployeeRoleInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutEmployeeRoleInput;
}
