import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateNestedOneWithoutEmployeeRoleInput } from '../employee/employee-create-nested-one-without-employee-role.input';
import { RoleCreateNestedOneWithoutEmployeeRoleInput } from '../role/role-create-nested-one-without-employee-role.input';

@InputType()
export class EmployeeRoleCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutEmployeeRoleInput, {nullable:false})
    employee!: EmployeeCreateNestedOneWithoutEmployeeRoleInput;

    @Field(() => RoleCreateNestedOneWithoutEmployeeRoleInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutEmployeeRoleInput;
}
