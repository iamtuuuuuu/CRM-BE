import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeRoleCreateInput } from './employee-role-create.input';

@ArgsType()
export class CreateOneEmployeeRoleArgs {

    @Field(() => EmployeeRoleCreateInput, {nullable:false})
    data!: EmployeeRoleCreateInput;
}
