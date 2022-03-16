import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateNestedManyWithoutDepartmentInput } from '../employee/employee-create-nested-many-without-department.input';

@InputType()
export class DepartmentCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => EmployeeCreateNestedManyWithoutDepartmentInput, {nullable:true})
    Employee?: EmployeeCreateNestedManyWithoutDepartmentInput;
}
