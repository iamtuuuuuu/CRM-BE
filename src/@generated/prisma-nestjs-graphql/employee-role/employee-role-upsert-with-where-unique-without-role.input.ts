import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';
import { EmployeeRoleUpdateWithoutRoleInput } from './employee-role-update-without-role.input';
import { EmployeeRoleCreateWithoutRoleInput } from './employee-role-create-without-role.input';

@InputType()
export class EmployeeRoleUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => EmployeeRoleWhereUniqueInput, {nullable:false})
    where!: EmployeeRoleWhereUniqueInput;

    @Field(() => EmployeeRoleUpdateWithoutRoleInput, {nullable:false})
    update!: EmployeeRoleUpdateWithoutRoleInput;

    @Field(() => EmployeeRoleCreateWithoutRoleInput, {nullable:false})
    create!: EmployeeRoleCreateWithoutRoleInput;
}
