import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleWhereInput } from './employee-role-where.input';

@InputType()
export class EmployeeRoleListRelationFilter {

    @Field(() => EmployeeRoleWhereInput, {nullable:true})
    every?: EmployeeRoleWhereInput;

    @Field(() => EmployeeRoleWhereInput, {nullable:true})
    some?: EmployeeRoleWhereInput;

    @Field(() => EmployeeRoleWhereInput, {nullable:true})
    none?: EmployeeRoleWhereInput;
}
