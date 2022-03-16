import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateNestedOneWithoutEmployeeRoleInput } from '../employee/employee-create-nested-one-without-employee-role.input';

@InputType()
export class EmployeeRoleCreateWithoutRoleInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutEmployeeRoleInput, {nullable:false})
    employee!: EmployeeCreateNestedOneWithoutEmployeeRoleInput;
}
