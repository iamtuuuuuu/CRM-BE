import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutEmployeeRoleInput } from './employee-create-without-employee-role.input';

@InputType()
export class EmployeeCreateOrConnectWithoutEmployeeRoleInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutEmployeeRoleInput, {nullable:false})
    create!: EmployeeCreateWithoutEmployeeRoleInput;
}
