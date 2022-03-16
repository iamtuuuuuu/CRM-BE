import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentCreateWithoutEmployeeInput } from './department-create-without-employee.input';

@InputType()
export class DepartmentCreateOrConnectWithoutEmployeeInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: DepartmentWhereUniqueInput;

    @Field(() => DepartmentCreateWithoutEmployeeInput, {nullable:false})
    create!: DepartmentCreateWithoutEmployeeInput;
}
