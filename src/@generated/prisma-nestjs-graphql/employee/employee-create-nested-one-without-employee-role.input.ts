import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutEmployeeRoleInput } from './employee-create-without-employee-role.input';
import { EmployeeCreateOrConnectWithoutEmployeeRoleInput } from './employee-create-or-connect-without-employee-role.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutEmployeeRoleInput {

    @Field(() => EmployeeCreateWithoutEmployeeRoleInput, {nullable:true})
    create?: EmployeeCreateWithoutEmployeeRoleInput;

    @Field(() => EmployeeCreateOrConnectWithoutEmployeeRoleInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeRoleInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
