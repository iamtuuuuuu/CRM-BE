import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleRoleIdEmployeeIdCompoundUniqueInput } from './employee-role-role-id-employee-id-compound-unique.input';

@InputType()
export class EmployeeRoleWhereUniqueInput {

    @Field(() => EmployeeRoleRoleIdEmployeeIdCompoundUniqueInput, {nullable:true})
    roleId_employeeId?: EmployeeRoleRoleIdEmployeeIdCompoundUniqueInput;
}
