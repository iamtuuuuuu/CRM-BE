import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';
import { EmployeeRoleUpdateWithoutEmployeeInput } from './employee-role-update-without-employee.input';

@InputType()
export class EmployeeRoleUpdateWithWhereUniqueWithoutEmployeeInput {

    @Field(() => EmployeeRoleWhereUniqueInput, {nullable:false})
    where!: EmployeeRoleWhereUniqueInput;

    @Field(() => EmployeeRoleUpdateWithoutEmployeeInput, {nullable:false})
    data!: EmployeeRoleUpdateWithoutEmployeeInput;
}
