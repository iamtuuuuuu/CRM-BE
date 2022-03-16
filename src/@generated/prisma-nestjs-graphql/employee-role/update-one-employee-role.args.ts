import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeRoleUpdateInput } from './employee-role-update.input';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';

@ArgsType()
export class UpdateOneEmployeeRoleArgs {

    @Field(() => EmployeeRoleUpdateInput, {nullable:false})
    data!: EmployeeRoleUpdateInput;

    @Field(() => EmployeeRoleWhereUniqueInput, {nullable:false})
    where!: EmployeeRoleWhereUniqueInput;
}
