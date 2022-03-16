import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutDepartmentInput } from './employee-create-without-department.input';

@InputType()
export class EmployeeCreateOrConnectWithoutDepartmentInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutDepartmentInput, {nullable:false})
    create!: EmployeeCreateWithoutDepartmentInput;
}
