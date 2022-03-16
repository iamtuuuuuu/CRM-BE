import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleScalarWhereInput } from './employee-role-scalar-where.input';
import { EmployeeRoleUpdateManyMutationInput } from './employee-role-update-many-mutation.input';

@InputType()
export class EmployeeRoleUpdateManyWithWhereWithoutRoleInput {

    @Field(() => EmployeeRoleScalarWhereInput, {nullable:false})
    where!: EmployeeRoleScalarWhereInput;

    @Field(() => EmployeeRoleUpdateManyMutationInput, {nullable:false})
    data!: EmployeeRoleUpdateManyMutationInput;
}
