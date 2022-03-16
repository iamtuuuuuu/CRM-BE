import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutEmployeeRoleInput } from './employee-create-without-employee-role.input';
import { EmployeeCreateOrConnectWithoutEmployeeRoleInput } from './employee-create-or-connect-without-employee-role.input';
import { EmployeeUpsertWithoutEmployeeRoleInput } from './employee-upsert-without-employee-role.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutEmployeeRoleInput } from './employee-update-without-employee-role.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutEmployeeRoleInput {

    @Field(() => EmployeeCreateWithoutEmployeeRoleInput, {nullable:true})
    create?: EmployeeCreateWithoutEmployeeRoleInput;

    @Field(() => EmployeeCreateOrConnectWithoutEmployeeRoleInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeRoleInput;

    @Field(() => EmployeeUpsertWithoutEmployeeRoleInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutEmployeeRoleInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutEmployeeRoleInput, {nullable:true})
    update?: EmployeeUpdateWithoutEmployeeRoleInput;
}
