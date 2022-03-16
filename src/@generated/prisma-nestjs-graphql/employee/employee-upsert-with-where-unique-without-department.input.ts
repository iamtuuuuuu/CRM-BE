import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutDepartmentInput } from './employee-update-without-department.input';
import { EmployeeCreateWithoutDepartmentInput } from './employee-create-without-department.input';

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutDepartmentInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutDepartmentInput, {nullable:false})
    update!: EmployeeUpdateWithoutDepartmentInput;

    @Field(() => EmployeeCreateWithoutDepartmentInput, {nullable:false})
    create!: EmployeeCreateWithoutDepartmentInput;
}
