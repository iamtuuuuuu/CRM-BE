import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutDepartmentInput } from './employee-update-without-department.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutDepartmentInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutDepartmentInput, {nullable:false})
    data!: EmployeeUpdateWithoutDepartmentInput;
}
