import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';
import { EmployeeRoleCreateInput } from './employee-role-create.input';
import { EmployeeRoleUpdateInput } from './employee-role-update.input';

@ArgsType()
export class UpsertOneEmployeeRoleArgs {

    @Field(() => EmployeeRoleWhereUniqueInput, {nullable:false})
    where!: EmployeeRoleWhereUniqueInput;

    @Field(() => EmployeeRoleCreateInput, {nullable:false})
    create!: EmployeeRoleCreateInput;

    @Field(() => EmployeeRoleUpdateInput, {nullable:false})
    update!: EmployeeRoleUpdateInput;
}
