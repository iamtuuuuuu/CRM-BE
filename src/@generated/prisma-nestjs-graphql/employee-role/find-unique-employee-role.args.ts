import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';

@ArgsType()
export class FindUniqueEmployeeRoleArgs {

    @Field(() => EmployeeRoleWhereUniqueInput, {nullable:false})
    where!: EmployeeRoleWhereUniqueInput;
}
