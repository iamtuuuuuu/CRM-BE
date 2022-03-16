import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';
import { EmployeeRoleUpdateWithoutRoleInput } from './employee-role-update-without-role.input';

@InputType()
export class EmployeeRoleUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => EmployeeRoleWhereUniqueInput, {nullable:false})
    where!: EmployeeRoleWhereUniqueInput;

    @Field(() => EmployeeRoleUpdateWithoutRoleInput, {nullable:false})
    data!: EmployeeRoleUpdateWithoutRoleInput;
}
