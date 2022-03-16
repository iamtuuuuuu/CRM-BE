import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeRoleCreateManyInput } from './employee-role-create-many.input';

@ArgsType()
export class CreateManyEmployeeRoleArgs {

    @Field(() => [EmployeeRoleCreateManyInput], {nullable:false})
    data!: Array<EmployeeRoleCreateManyInput>;
}
