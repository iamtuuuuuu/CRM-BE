import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentCreateInput } from './department-create.input';
import { DepartmentUpdateInput } from './department-update.input';

@ArgsType()
export class UpsertOneDepartmentArgs {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: DepartmentWhereUniqueInput;

    @Field(() => DepartmentCreateInput, {nullable:false})
    create!: DepartmentCreateInput;

    @Field(() => DepartmentUpdateInput, {nullable:false})
    update!: DepartmentUpdateInput;
}
