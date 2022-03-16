import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleCreateManyEmployeeInput } from './employee-role-create-many-employee.input';

@InputType()
export class EmployeeRoleCreateManyEmployeeInputEnvelope {

    @Field(() => [EmployeeRoleCreateManyEmployeeInput], {nullable:false})
    data!: Array<EmployeeRoleCreateManyEmployeeInput>;
}
