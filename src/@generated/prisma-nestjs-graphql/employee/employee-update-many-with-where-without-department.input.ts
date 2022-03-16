import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';
import { EmployeeUpdateManyMutationInput } from './employee-update-many-mutation.input';

@InputType()
export class EmployeeUpdateManyWithWhereWithoutDepartmentInput {

    @Field(() => EmployeeScalarWhereInput, {nullable:false})
    where!: EmployeeScalarWhereInput;

    @Field(() => EmployeeUpdateManyMutationInput, {nullable:false})
    data!: EmployeeUpdateManyMutationInput;
}
