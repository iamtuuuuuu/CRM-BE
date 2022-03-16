import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeRoleUpdateManyMutationInput } from './employee-role-update-many-mutation.input';
import { EmployeeRoleWhereInput } from './employee-role-where.input';

@ArgsType()
export class UpdateManyEmployeeRoleArgs {

    @Field(() => EmployeeRoleUpdateManyMutationInput, {nullable:false})
    data!: EmployeeRoleUpdateManyMutationInput;

    @Field(() => EmployeeRoleWhereInput, {nullable:true})
    where?: EmployeeRoleWhereInput;
}
