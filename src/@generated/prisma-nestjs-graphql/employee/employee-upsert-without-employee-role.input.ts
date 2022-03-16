import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutEmployeeRoleInput } from './employee-update-without-employee-role.input';
import { EmployeeCreateWithoutEmployeeRoleInput } from './employee-create-without-employee-role.input';

@InputType()
export class EmployeeUpsertWithoutEmployeeRoleInput {

    @Field(() => EmployeeUpdateWithoutEmployeeRoleInput, {nullable:false})
    update!: EmployeeUpdateWithoutEmployeeRoleInput;

    @Field(() => EmployeeCreateWithoutEmployeeRoleInput, {nullable:false})
    create!: EmployeeCreateWithoutEmployeeRoleInput;
}
