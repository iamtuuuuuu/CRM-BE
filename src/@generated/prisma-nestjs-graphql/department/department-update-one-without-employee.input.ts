import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutEmployeeInput } from './department-create-without-employee.input';
import { DepartmentCreateOrConnectWithoutEmployeeInput } from './department-create-or-connect-without-employee.input';
import { DepartmentUpsertWithoutEmployeeInput } from './department-upsert-without-employee.input';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithoutEmployeeInput } from './department-update-without-employee.input';

@InputType()
export class DepartmentUpdateOneWithoutEmployeeInput {

    @Field(() => DepartmentCreateWithoutEmployeeInput, {nullable:true})
    create?: DepartmentCreateWithoutEmployeeInput;

    @Field(() => DepartmentCreateOrConnectWithoutEmployeeInput, {nullable:true})
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeeInput;

    @Field(() => DepartmentUpsertWithoutEmployeeInput, {nullable:true})
    upsert?: DepartmentUpsertWithoutEmployeeInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    connect?: DepartmentWhereUniqueInput;

    @Field(() => DepartmentUpdateWithoutEmployeeInput, {nullable:true})
    update?: DepartmentUpdateWithoutEmployeeInput;
}
