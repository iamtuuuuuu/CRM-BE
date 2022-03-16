import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';
import { EmployeeRoleUpdateWithoutEmployeeInput } from './employee-role-update-without-employee.input';
import { EmployeeRoleCreateWithoutEmployeeInput } from './employee-role-create-without-employee.input';

@InputType()
export class EmployeeRoleUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => EmployeeRoleWhereUniqueInput, {nullable:false})
    where!: EmployeeRoleWhereUniqueInput;

    @Field(() => EmployeeRoleUpdateWithoutEmployeeInput, {nullable:false})
    update!: EmployeeRoleUpdateWithoutEmployeeInput;

    @Field(() => EmployeeRoleCreateWithoutEmployeeInput, {nullable:false})
    create!: EmployeeRoleCreateWithoutEmployeeInput;
}
