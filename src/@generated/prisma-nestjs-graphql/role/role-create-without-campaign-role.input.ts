import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeRoleCreateNestedManyWithoutRoleInput } from '../employee-role/employee-role-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutCampaignRoleInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => EmployeeRoleCreateNestedManyWithoutRoleInput, {nullable:true})
    EmployeeRole?: EmployeeRoleCreateNestedManyWithoutRoleInput;
}
