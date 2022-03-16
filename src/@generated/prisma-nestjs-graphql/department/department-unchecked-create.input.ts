import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EmployeeUncheckedCreateNestedManyWithoutDepartmentInput } from '../employee/employee-unchecked-create-nested-many-without-department.input';

@InputType()
export class DepartmentUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => EmployeeUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    Employee?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput;
}
