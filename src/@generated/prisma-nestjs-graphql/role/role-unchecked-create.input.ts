import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CampaignRoleUncheckedCreateNestedManyWithoutRoleInput } from '../campaign-role/campaign-role-unchecked-create-nested-many-without-role.input';
import { EmployeeRoleUncheckedCreateNestedManyWithoutRoleInput } from '../employee-role/employee-role-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => CampaignRoleUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    CampaignRole?: CampaignRoleUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => EmployeeRoleUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    EmployeeRole?: EmployeeRoleUncheckedCreateNestedManyWithoutRoleInput;
}
