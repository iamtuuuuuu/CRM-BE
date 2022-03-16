import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutEmployeeInput } from './department-update-without-employee.input';
import { DepartmentCreateWithoutEmployeeInput } from './department-create-without-employee.input';

@InputType()
export class DepartmentUpsertWithoutEmployeeInput {

    @Field(() => DepartmentUpdateWithoutEmployeeInput, {nullable:false})
    update!: DepartmentUpdateWithoutEmployeeInput;

    @Field(() => DepartmentCreateWithoutEmployeeInput, {nullable:false})
    create!: DepartmentCreateWithoutEmployeeInput;
}
