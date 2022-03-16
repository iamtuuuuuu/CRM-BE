import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EmployeeRoleUncheckedCreateNestedManyWithoutRoleInput } from '../employee-role/employee-role-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutCampaignRoleInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => EmployeeRoleUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    EmployeeRole?: EmployeeRoleUncheckedCreateNestedManyWithoutRoleInput;
}
