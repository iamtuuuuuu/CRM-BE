import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeRoleWhereInput } from './employee-role-where.input';

@ArgsType()
export class DeleteManyEmployeeRoleArgs {

    @Field(() => EmployeeRoleWhereInput, {nullable:true})
    where?: EmployeeRoleWhereInput;
}
