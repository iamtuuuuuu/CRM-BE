import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';
import { EmployeeRoleCreateWithoutRoleInput } from './employee-role-create-without-role.input';

@InputType()
export class EmployeeRoleCreateOrConnectWithoutRoleInput {

    @Field(() => EmployeeRoleWhereUniqueInput, {nullable:false})
    where!: EmployeeRoleWhereUniqueInput;

    @Field(() => EmployeeRoleCreateWithoutRoleInput, {nullable:false})
    create!: EmployeeRoleCreateWithoutRoleInput;
}
