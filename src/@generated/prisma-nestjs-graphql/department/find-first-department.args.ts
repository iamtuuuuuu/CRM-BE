import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { DepartmentOrderByWithRelationInput } from './department-order-by-with-relation.input';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DepartmentScalarFieldEnum } from './department-scalar-field.enum';

@ArgsType()
export class FindFirstDepartmentArgs {

    @Field(() => DepartmentWhereInput, {nullable:true})
    where?: DepartmentWhereInput;

    @Field(() => [DepartmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DepartmentOrderByWithRelationInput>;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    cursor?: DepartmentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DepartmentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DepartmentScalarFieldEnum>;
}
