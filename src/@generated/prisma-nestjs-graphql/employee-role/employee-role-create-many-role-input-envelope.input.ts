import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleCreateManyRoleInput } from './employee-role-create-many-role.input';

@InputType()
export class EmployeeRoleCreateManyRoleInputEnvelope {

    @Field(() => [EmployeeRoleCreateManyRoleInput], {nullable:false})
    data!: Array<EmployeeRoleCreateManyRoleInput>;
}
