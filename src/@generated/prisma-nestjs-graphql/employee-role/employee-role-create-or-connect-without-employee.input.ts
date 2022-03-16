import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';
import { EmployeeRoleCreateWithoutEmployeeInput } from './employee-role-create-without-employee.input';

@InputType()
export class EmployeeRoleCreateOrConnectWithoutEmployeeInput {

    @Field(() => EmployeeRoleWhereUniqueInput, {nullable:false})
    where!: EmployeeRoleWhereUniqueInput;

    @Field(() => EmployeeRoleCreateWithoutEmployeeInput, {nullable:false})
    create!: EmployeeRoleCreateWithoutEmployeeInput;
}
