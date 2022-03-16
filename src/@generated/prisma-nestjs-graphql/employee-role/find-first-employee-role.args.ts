import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeRoleWhereInput } from './employee-role-where.input';
import { EmployeeRoleOrderByWithRelationInput } from './employee-role-order-by-with-relation.input';
import { EmployeeRoleWhereUniqueInput } from './employee-role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmployeeRoleScalarFieldEnum } from './employee-role-scalar-field.enum';

@ArgsType()
export class FindFirstEmployeeRoleArgs {

    @Field(() => EmployeeRoleWhereInput, {nullable:true})
    where?: EmployeeRoleWhereInput;

    @Field(() => [EmployeeRoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeRoleOrderByWithRelationInput>;

    @Field(() => EmployeeRoleWhereUniqueInput, {nullable:true})
    cursor?: EmployeeRoleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EmployeeRoleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeeRoleScalarFieldEnum>;
}
