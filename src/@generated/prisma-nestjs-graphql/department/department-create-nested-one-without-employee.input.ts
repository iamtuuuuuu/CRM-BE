import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutEmployeeInput } from './department-create-without-employee.input';
import { DepartmentCreateOrConnectWithoutEmployeeInput } from './department-create-or-connect-without-employee.input';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutEmployeeInput {

    @Field(() => DepartmentCreateWithoutEmployeeInput, {nullable:true})
    create?: DepartmentCreateWithoutEmployeeInput;

    @Field(() => DepartmentCreateOrConnectWithoutEmployeeInput, {nullable:true})
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeeInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    connect?: DepartmentWhereUniqueInput;
}
